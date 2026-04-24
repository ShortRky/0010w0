/* ============================================
   app.js - Main Application Controller
   ============================================ */

class StudyHubApp {
    constructor() {
        this.isDarkTheme = true;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadPreferences();
        this.initializeParticles();
    }

    setupEventListeners() {
        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());

        // Help modal
        document.getElementById('help-btn').addEventListener('click', () => {
            UIHelper.showModal('help-modal');
        });

        const helpModal = document.getElementById('help-modal');
        const closeBtn = helpModal.querySelector('.modal-close');
        
        closeBtn.addEventListener('click', () => {
            UIHelper.hideModal('help-modal');
        });

        // Close modal when clicking outside
        helpModal.addEventListener('click', (e) => {
            if (e.target === helpModal) {
                UIHelper.hideModal('help-modal');
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === '?') {
                document.getElementById('help-btn').click();
            }
        });
    }

    toggleTheme() {
        const root = document.documentElement;
        this.isDarkTheme = !this.isDarkTheme;

        if (this.isDarkTheme) {
            root.style.setProperty('--primary-color', '#00ff88');
            root.style.setProperty('--secondary-color', '#ff0080');
            root.style.setProperty('--bg-dark', '#0a0e27');
            root.style.setProperty('--bg-darker', '#050810');
            root.style.setProperty('--bg-card', '#1a1f3a');
            root.style.setProperty('--text-primary', '#ffffff');
            document.body.style.filter = 'none';
            document.getElementById('theme-toggle').textContent = '🌙';
        } else {
            // Light theme
            root.style.setProperty('--primary-color', '#0066cc');
            root.style.setProperty('--secondary-color', '#ff6b6b');
            root.style.setProperty('--bg-dark', '#f5f5f5');
            root.style.setProperty('--bg-darker', '#ffffff');
            root.style.setProperty('--bg-card', '#ffffff');
            root.style.setProperty('--text-primary', '#1a1a1a');
            document.getElementById('theme-toggle').textContent = '☀️';
        }

        localStorage.setItem('studyhub_dark_theme', this.isDarkTheme);
        UIHelper.showNotification(this.isDarkTheme ? 'Dark theme enabled' : 'Light theme enabled', 'info', 1500);
    }

    loadPreferences() {
        const darkTheme = localStorage.getItem('studyhub_dark_theme');
        if (darkTheme === 'false') {
            this.isDarkTheme = true;
            this.toggleTheme(); // Will set to light
        }
    }

    initializeParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;

        // Create floating particles
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = Math.random() > 0.5 ? '#00ff88' : '#ff0080';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.opacity = Math.random() * 0.5 + 0.25;
            particle.style.animation = 'particle-float ' + (Math.random() * 10 + 15) + 's linear infinite';
            particle.style.pointerEvents = 'none';

            particlesContainer.appendChild(particle);

            // Remove after animation
            setTimeout(() => particle.remove(), (Math.random() * 10 + 15) * 1000);
        }

        // Create particles periodically
        setInterval(createParticle, 2000);

        // Initial particles
        for (let i = 0; i < 5; i++) {
            createParticle();
        }
    }

    // Statistics and progress tracking
    showStatistics() {
        const stats = Storage.getStatistics();
        
        let statsHTML = '<h3>Your Progress</h3>';
        statsHTML += `<p>Total Problems Solved: <strong>${stats.total}</strong></p>`;
        statsHTML += `<p>Correct Answers: <strong>${stats.correct}</strong></p>`;
        statsHTML += `<p>Accuracy: <strong>${stats.accuracy}%</strong></p>`;

        if (Object.keys(stats.bySubject).length > 0) {
            statsHTML += '<h4>By Subject:</h4>';
            for (const [subject, data] of Object.entries(stats.bySubject)) {
                const accuracy = Math.round((data.correct / data.total) * 100);
                statsHTML += `<p>${subject}: ${data.correct}/${data.total} (${accuracy}%)</p>`;
            }
        }

        return statsHTML;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 StudyHub initialized');
    window.app = new StudyHubApp();

    // Welcome message
    UIHelper.showNotification('Welcome to StudyHub! 🎓 Select a subject to get started.', 'info', 4000);

    // Easter egg
    let easterEggCounter = 0;
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') easterEggCounter++;
        if (easterEggCounter === 10) {
            document.body.style.animation = 'spin 2s linear';
            UIHelper.showNotification('🌀 WHEEEEE! 🌀', 'info', 2000);
            easterEggCounter = 0;
            setTimeout(() => {
                document.body.style.animation = 'none';
            }, 2000);
        }
    });
});

// Handle unload
window.addEventListener('beforeunload', function(e) {
    // Optional: Save any pending data
    if (window.sketchbook) {
        window.sketchbook.saveSketch();
    }
});

// Service Worker for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('✅ Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// Export app
window.StudyHubApp = StudyHubApp;
