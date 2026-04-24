/* ============================================
   sketchbook.js - Drawing Canvas & Tools
   ============================================ */

class Sketchbook {
    constructor() {
        this.canvas = document.getElementById('sketchbook-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.tool = 'pen';
        this.color = '#00ff88';
        this.brushSize = 3;
        this.isDrawing = false;
        this.lastX = 0;
        this.lastY = 0;
        this.drawingHistory = [];
        this.historyStep = -1;
        this.textOverlays = [];

        this.resizeCanvas();
        this.init();
        this.loadSketchIfExists();
    }

    init() {
        // Canvas event listeners
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseout', () => this.stopDrawing());

        // Touch events for mobile
        this.canvas.addEventListener('touchstart', (e) => this.startDrawing(e));
        this.canvas.addEventListener('touchmove', (e) => this.draw(e));
        this.canvas.addEventListener('touchend', () => this.stopDrawing());

        // Tool selection
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectTool(e));
        });

        // Color picker
        document.getElementById('color-picker').addEventListener('change', (e) => {
            this.color = e.target.value;
        });

        // Color presets
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.color = e.target.dataset.color;
                document.getElementById('color-picker').value = this.color;
            });
        });

        // Brush size
        document.getElementById('brush-size').addEventListener('input', (e) => {
            this.brushSize = parseInt(e.target.value);
            document.getElementById('size-display').textContent = `${this.brushSize}px`;
        });

        // Clear button
        document.getElementById('clear-all-btn').addEventListener('click', () => this.clearCanvas());

        // Download button
        document.getElementById('download-sketch-btn').addEventListener('click', () => this.downloadSketch());

        // Add text button
        document.getElementById('add-text-btn').addEventListener('click', () => this.addTextInput());

        // Window resize
        window.addEventListener('resize', () => this.resizeCanvas());

        // Save on unload
        window.addEventListener('beforeunload', () => this.saveSketch());

        // Auto-save periodically
        setInterval(() => this.saveSketch(), 30000);
    }

    resizeCanvas() {
        const container = this.canvas.parentElement;
        const rect = container.getBoundingClientRect();
        
        // Get current canvas content
        const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        
        // Resize canvas
        this.canvas.width = rect.width - 20;
        this.canvas.height = 400;
        
        // Restore content
        if (imageData.data.some(val => val > 0)) {
            this.ctx.putImageData(imageData, 0, 0);
        }
    }

    selectTool(e) {
        // Remove active class from all buttons
        document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Set tool
        this.tool = e.target.dataset.tool;
        
        // Update cursor
        if (this.tool === 'pen') {
            this.canvas.style.cursor = 'crosshair';
        } else if (this.tool === 'eraser') {
            this.canvas.style.cursor = 'cell';
        }

        UIHelper.showNotification(`Switched to ${this.tool}`, 'info', 1500);
    }

    startDrawing(e) {
        this.isDrawing = true;
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        
        if (e.touches) {
            this.lastX = (e.touches[0].clientX - rect.left) * scaleX;
            this.lastY = (e.touches[0].clientY - rect.top) * scaleY;
        } else {
            this.lastX = (e.clientX - rect.left) * scaleX;
            this.lastY = (e.clientY - rect.top) * scaleY;
        }

        // Save state for undo
        this.saveState();
    }

    draw(e) {
        if (!this.isDrawing) return;

        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        
        let x, y;
        if (e.touches) {
            x = (e.touches[0].clientX - rect.left) * scaleX;
            y = (e.touches[0].clientY - rect.top) * scaleY;
        } else {
            x = (e.clientX - rect.left) * scaleX;
            y = (e.clientY - rect.top) * scaleY;
        }

        if (this.tool === 'pen') {
            this.drawLine(this.lastX, this.lastY, x, y, this.color, this.brushSize);
        } else if (this.tool === 'eraser') {
            this.erase(this.lastX, this.lastY, x, y, this.brushSize * 1.5);
        }

        this.lastX = x;
        this.lastY = y;

        this.updateStatus();
    }

    stopDrawing() {
        this.isDrawing = false;
    }

    drawLine(x1, y1, x2, y2, color, size) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.globalAlpha = 0.9;

        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();

        this.ctx.globalAlpha = 1;
    }

    erase(x1, y1, x2, y2, size) {
        const imageData = this.ctx.getImageData(
            Math.max(0, x1 - size),
            Math.max(0, y1 - size),
            size * 2,
            size * 2
        );

        // Bresenham line algorithm for eraser
        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);
        const sx = x1 < x2 ? 1 : -1;
        const sy = y1 < y2 ? 1 : -1;
        let err = dx - dy;

        let x = Math.floor(x1);
        let y = Math.floor(y1);

        while (true) {
            const eraserRadius = size;
            for (let px = x - eraserRadius; px < x + eraserRadius; px++) {
                for (let py = y - eraserRadius; py < y + eraserRadius; py++) {
                    if (px >= 0 && px < this.canvas.width && py >= 0 && py < this.canvas.height) {
                        const index = (py * this.canvas.width + px) * 4;
                        imageData.data[index + 3] = 0; // Set alpha to 0
                    }
                }
            }

            if (x === x2 && y === y2) break;
            const e2 = 2 * err;
            if (e2 > -dy) { err -= dy; x += sx; }
            if (e2 < dx) { err += dx; y += sy; }
        }

        this.ctx.putImageData(imageData, Math.max(0, x1 - size), Math.max(0, y1 - size));
    }

    clearCanvas() {
        if (confirm('Are you sure you want to clear the entire canvas? This cannot be undone.')) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawingHistory = [];
            this.historyStep = -1;
            this.textOverlays = [];
            document.getElementById('text-inputs').innerHTML = '';
            this.saveSketch();
            UIHelper.showNotification('Canvas cleared', 'info');
        }
    }

    downloadSketch() {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        CanvasHelper.downloadCanvas(this.canvas, `sketch-${timestamp}.png`);
        UIHelper.showNotification('Sketch downloaded! 📥', 'success');
    }

    saveState() {
        this.historyStep++;
        if (this.historyStep < this.drawingHistory.length) {
            this.drawingHistory.length = this.historyStep;
        }
        this.drawingHistory.push(
            this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
        );
    }

    undo() {
        if (this.historyStep > 0) {
            this.historyStep--;
            this.ctx.putImageData(this.drawingHistory[this.historyStep], 0, 0);
        }
    }

    redo() {
        if (this.historyStep < this.drawingHistory.length - 1) {
            this.historyStep++;
            this.ctx.putImageData(this.drawingHistory[this.historyStep], 0, 0);
        }
    }

    addTextInput() {
        const container = document.getElementById('text-inputs');
        const id = Date.now();

        const textDiv = document.createElement('div');
        textDiv.className = 'text-input-item';
        textDiv.innerHTML = `
            <input type="text" placeholder="Enter note or label..." data-id="${id}">
            <button onclick="window.sketchbook.removeTextInput(${id})">×</button>
        `;

        container.appendChild(textDiv);

        const input = textDiv.querySelector('input');
        input.focus();

        input.addEventListener('blur', () => {
            if (input.value.trim()) {
                this.renderTextOnCanvas(input.value);
                this.textOverlays.push(input.value);
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                this.renderTextOnCanvas(input.value);
                this.textOverlays.push(input.value);
                input.blur();
            }
        });
    }

    renderTextOnCanvas(text) {
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = this.color;
        this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        this.ctx.shadowBlur = 3;
        this.ctx.shadowOffsetX = 1;
        this.ctx.shadowOffsetY = 1;

        const x = 20 + Math.random() * 100;
        const y = 40 + Math.random() * 100;

        this.ctx.fillText(text, x, y);
        this.ctx.shadowColor = 'transparent';
    }

    removeTextInput(id) {
        const container = document.getElementById('text-inputs');
        const item = container.querySelector(`[data-id="${id}"]`)?.parentElement;
        if (item) item.remove();
    }

    saveSketch() {
        const sketchData = this.canvas.toDataURL('image/png');
        const sketchId = Storage.saveSketch(sketchData);
        this.updateStatus(`Saved at ${new Date().toLocaleTimeString()}`);
    }

    loadSketchIfExists() {
        const sketches = Storage.getAllSketches();
        if (sketches.length > 0) {
            const lastSketch = sketches[sketches.length - 1];
            const img = new Image();
            img.onload = () => {
                this.ctx.drawImage(img, 0, 0);
                this.updateStatus(`Loaded previous sketch`);
            };
            img.src = lastSketch.data;
        }
    }

    updateStatus(message = '') {
        const status = document.getElementById('sketch-status');
        if (message) {
            status.textContent = message;
        } else {
            const sketches = Storage.getAllSketches();
            status.textContent = `${sketches.length} sketch(es) saved | Tool: ${this.tool} | Size: ${this.brushSize}px`;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.sketchbook = new Sketchbook();
});
