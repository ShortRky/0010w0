/* ============================================
   utils.js - Utility Functions
   ============================================ */

// ============================================
// LocalStorage Management
// ============================================

const Storage = {
    // Save sketch data
    saveSketch: function(sketchData) {
        const sketches = this.getAllSketches();
        const sketch = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            data: sketchData,
            notes: []
        };
        sketches.push(sketch);
        localStorage.setItem('studyhub_sketches', JSON.stringify(sketches));
        return sketch.id;
    },

    // Get all sketches
    getAllSketches: function() {
        const data = localStorage.getItem('studyhub_sketches');
        return data ? JSON.parse(data) : [];
    },

    // Get specific sketch
    getSketch: function(id) {
        const sketches = this.getAllSketches();
        return sketches.find(s => s.id === id);
    },

    // Delete sketch
    deleteSketch: function(id) {
        const sketches = this.getAllSketches();
        const filtered = sketches.filter(s => s.id !== id);
        localStorage.setItem('studyhub_sketches', JSON.stringify(filtered));
    },

    // Add note to sketch
    addNoteToSketch: function(sketchId, note) {
        const sketches = this.getAllSketches();
        const sketch = sketches.find(s => s.id === sketchId);
        if (sketch) {
            sketch.notes.push({
                text: note,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('studyhub_sketches', JSON.stringify(sketches));
        }
    },

    // Save problem history
    saveProblemAttempt: function(problem, selected, isCorrect) {
        const history = this.getProblemHistory();
        history.push({
            id: Date.now(),
            problem: problem,
            selectedAnswer: selected,
            isCorrect: isCorrect,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('studyhub_history', JSON.stringify(history));
    },

    // Get problem history
    getProblemHistory: function() {
        const data = localStorage.getItem('studyhub_history');
        return data ? JSON.parse(data) : [];
    },

    // Get statistics
    getStatistics: function() {
        const history = this.getProblemHistory();
        if (history.length === 0) {
            return { total: 0, correct: 0, accuracy: 0, bySubject: {} };
        }
        
        const correct = history.filter(h => h.isCorrect).length;
        const bySubject = {};
        
        history.forEach(h => {
            const subject = h.problem.subject;
            if (!bySubject[subject]) {
                bySubject[subject] = { total: 0, correct: 0 };
            }
            bySubject[subject].total++;
            if (h.isCorrect) bySubject[subject].correct++;
        });

        return {
            total: history.length,
            correct: correct,
            accuracy: Math.round((correct / history.length) * 100),
            bySubject: bySubject
        };
    },

    // Clear all data
    clearAll: function() {
        localStorage.removeItem('studyhub_sketches');
        localStorage.removeItem('studyhub_history');
    }
};

// ============================================
// LaTeX/MathJax Helper
// ============================================

const MathHelper = {
    // Render math on page
    renderMath: function() {
        if (window.MathJax) {
            MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
        }
    },

    // Render specific element
    renderElement: function(element) {
        if (window.MathJax) {
            MathJax.typesetPromise([element]).catch(err => console.log('MathJax error:', err));
        }
    }
};

// ============================================
// Canvas/Drawing Helper
// ============================================

const CanvasHelper = {
    // Create canvas from image data
    createCanvasFromData: function(imageData) {
        const canvas = document.createElement('canvas');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        const ctx = canvas.getContext('2d');
        ctx.putImageData(imageData, 0, 0);
        return canvas;
    },

    // Download canvas as image
    downloadCanvas: function(canvas, filename = 'sketch.png') {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = filename;
        link.click();
    },

    // Get canvas image data URL
    getCanvasDataURL: function(canvas) {
        return canvas.toDataURL('image/png');
    },

    // Clear canvas
    clearCanvas: function(ctx, canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
};

// ============================================
// UI Helper
// ============================================

const UIHelper = {
    // Show notification
    showNotification: function(message, type = 'info', duration = 3000) {
        const feedbackContainer = document.getElementById('feedback-container');
        if (!feedbackContainer) return;

        const notification = document.createElement('div');
        notification.className = `feedback ${type}`;
        notification.textContent = message;
        notification.style.animation = 'slideDown 0.3s ease-out';

        feedbackContainer.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    },

    // Show loading spinner
    showSpinner: function(container) {
        const spinner = document.createElement('div');
        spinner.className = 'animate-spin';
        spinner.textContent = '⚙️';
        spinner.style.fontSize = '2em';
        spinner.style.textAlign = 'center';
        container.appendChild(spinner);
        return spinner;
    },

    // Show modal
    showModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            modal.style.animation = 'fadeIn 0.3s ease-out';
        }
    },

    // Hide modal
    hideModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    },

    // Update element content with animation
    updateWithAnimation: function(element, content) {
        element.style.animation = 'fadeOut 0.2s ease-out';
        setTimeout(() => {
            element.innerHTML = content;
            element.style.animation = 'fadeIn 0.3s ease-out';
        }, 200);
    }
};

// ============================================
// Array/Random Helper
// ============================================

const RandomHelper = {
    // Shuffle array (Fisher-Yates)
    shuffle: function(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    // Get random element
    getRandomElement: function(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    // Get random number in range
    getRandomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

// ============================================
// Animation Helper
// ============================================

const AnimationHelper = {
    // Pulse animation
    pulse: function(element, duration = 500) {
        element.style.animation = `pulse ${duration}ms ease-out`;
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    },

    // Shake animation
    shake: function(element, duration = 500) {
        element.style.animation = `shake ${duration}ms ease-out`;
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    },

    // Bounce animation
    bounce: function(element, duration = 600) {
        element.style.animation = `bounce ${duration}ms ease-in-out`;
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    },

    // Fade in animation
    fadeIn: function(element, duration = 300) {
        element.style.opacity = '0';
        element.style.animation = `fadeIn ${duration}ms ease-out`;
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.animation = '';
        }, duration);
    },

    // Glow effect
    glow: function(element, duration = 2000) {
        element.style.animation = `glow ${duration}ms ease-in-out infinite`;
    },

    // Stop animation
    stopAnimation: function(element) {
        element.style.animation = '';
    }
};

// ============================================
// Grid Background Animation
// ============================================

function initializeGridBackground() {
    const canvas = document.getElementById('grid-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match window
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    
    // Draw animated grid
    let offset = 0;
    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)';
        ctx.lineWidth = 1;
        
        const gridSize = 50;
        
        // Vertical lines
        for (let x = offset; x < canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = offset; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
        
        // Slow animation
        offset = (offset + 0.5) % gridSize;
        requestAnimationFrame(drawGrid);
    }
    
    drawGrid();
    window.addEventListener('resize', resizeCanvas);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    initializeGridBackground();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Prevent shortcuts while typing in input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const shortcuts = {
        'p': () => document.querySelector('[data-tool="pen"]')?.click(),
        'e': () => document.querySelector('[data-tool="eraser"]')?.click(),
        'c': () => document.getElementById('clear-all-btn')?.click(),
        'd': () => document.getElementById('download-sketch-btn')?.click(),
        '?': () => document.getElementById('help-btn')?.click(),
    };

    if (shortcuts[e.key?.toLowerCase()]) {
        e.preventDefault();
        shortcuts[e.key.toLowerCase()]();
    }
});

// Export for use
window.Storage = Storage;
window.MathHelper = MathHelper;
window.CanvasHelper = CanvasHelper;
window.UIHelper = UIHelper;
window.RandomHelper = RandomHelper;
window.AnimationHelper = AnimationHelper;
