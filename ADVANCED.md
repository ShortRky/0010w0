# ADVANCED - StudyHub Customization Guide

This guide covers advanced customization and extension of StudyHub for developers.

---

## 🚀 Advanced Features & Customization

### 1. Adding New Problem Subjects

Edit `js/data.js` to add complete new subject areas:

```javascript
'linear-algebra': {
    title: 'Linear Algebra: Matrices & Vectors',
    problems: [
        {
            id: 1,
            question: 'Find the determinant of $$\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$$',
            options: [
                { text: '$$5$$', correct: true },
                { text: '$$6$$', correct: false },
                { text: '$$4$$', correct: false },
                { text: '$$-5$$', correct: false }
            ],
            solution: [
                { text: 'For a 2×2 matrix $$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$, det = ad - bc' },
                { text: '$$\\det = (2)(4) - (3)(1) = 8 - 3 = 5$$' }
            ]
        }
        // More problems...
    ]
}
```

### 2. Custom Themes

Modify CSS variables in `css/style.css`:

```css
:root {
    /* Neon Purple Theme */
    --primary-color: #9d4edd;
    --secondary-color: #7209b7;
    --accent-color: #e0aaff;
    --bg-dark: #10002b;
    --bg-darker: #000000;
    --bg-card: #240046;
    --text-primary: #e0aaff;
    --text-secondary: #b0a8c8;
    --border-color: #3a0ca3;
}
```

**Quick Theme Presets:**

```css
/* Ocean Theme */
--primary-color: #00d4ff;
--secondary-color: #0099cc;
--accent-color: #00ffff;
--bg-dark: #001a33;
--bg-darker: #000b1a;
--bg-card: #002a4d;

/* Forest Theme */
--primary-color: #00ff41;
--secondary-color: #00cc33;
--accent-color: #00ff88;
--bg-dark: #0a1f0a;
--bg-darker: #000d00;
--bg-card: #1a3a1a;

/* Sunset Theme */
--primary-color: #ffaa00;
--secondary-color: #ff6600;
--accent-color: #ffdd00;
--bg-dark: #330f00;
--bg-darker: #1a0800;
--bg-card: #4d2200;
```

### 3. Custom Animations

Add new animations to `css/animations.css`:

```css
@keyframes neon-flicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        text-shadow: 0 0 20px var(--primary-color), 
                     0 0 30px var(--accent-color);
    }
    20%, 24%, 55% {
        text-shadow: none;
    }
}

/* Apply to element */
.element-name {
    animation: neon-flicker 3s infinite;
}
```

### 4. Extending Problem Generator

Create a new problem manager class in `js/problems.js`:

```javascript
class AdvancedProblemManager extends ProblemGenerator {
    constructor() {
        super();
        this.difficulty = 'intermediate';
        this.hints = [];
    }

    setDifficulty(level) {
        this.difficulty = level; // 'easy', 'intermediate', 'hard'
        this.generateNewProblem();
    }

    getHint() {
        return this.hints[Math.floor(Math.random() * this.hints.length)];
    }

    getHintedSolution() {
        return this.currentProblem.solution.slice(0, 3);
    }
}
```

### 5. Statistics Dashboard

Extend `js/utils.js` with analytics:

```javascript
const Analytics = {
    trackProblemAttempt: function(problem, isCorrect, timeSpent) {
        const attempt = {
            problem: problem.id,
            subject: problem.subject,
            correct: isCorrect,
            timeSpent: timeSpent,
            timestamp: Date.now()
        };
        
        let analytics = JSON.parse(localStorage.getItem('studyhub_analytics')) || [];
        analytics.push(attempt);
        localStorage.setItem('studyhub_analytics', JSON.stringify(analytics));
    },

    getLearningStreak: function() {
        const history = Storage.getProblemHistory();
        let streak = 0;
        for (let i = history.length - 1; i >= 0; i--) {
            if (history[i].isCorrect) streak++;
            else break;
        }
        return streak;
    },

    getMostDifficultTopic: function() {
        const stats = Storage.getStatistics();
        let worst = { subject: '', accuracy: 100 };
        
        for (const [subject, data] of Object.entries(stats.bySubject)) {
            const accuracy = (data.correct / data.total) * 100;
            if (accuracy < worst.accuracy) {
                worst = { subject, accuracy };
            }
        }
        return worst;
    }
};
```

### 6. Custom Canvas Features

Add advanced drawing tools to `js/sketchbook.js`:

```javascript
class AdvancedSketchbook extends Sketchbook {
    constructor() {
        super();
        this.shapes = [];
    }

    drawRectangle(x, y, width, height, color) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = this.brushSize;
        this.ctx.strokeRect(x, y, width, height);
    }

    drawCircle(x, y, radius, color) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = this.brushSize;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    drawGrid(spacing = 20, color = 'rgba(0, 255, 136, 0.2)') {
        this.ctx.strokeStyle = color;
        for (let x = 0; x < this.canvas.width; x += spacing) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }
        for (let y = 0; y < this.canvas.height; y += spacing) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }
}
```

### 7. Problem Difficulty Levels

Enhance problem selection:

```javascript
function getRandomProblemByDifficulty(subjectId, difficulty) {
    const subject = problemDatabase[subjectId];
    if (!subject) return null;

    const difficultyMap = {
        'easy': [0, 1],
        'intermediate': [1, 2],
        'hard': [2, 3]
    };

    const indices = difficultyMap[difficulty] || [0, 1, 2, 3];
    const filtered = subject.problems.filter((p, i) => indices.includes(i));
    
    if (filtered.length === 0) return subject.problems[0];
    return filtered[Math.floor(Math.random() * filtered.length)];
}
```

### 8. Timed Practice Mode

Add to `js/app.js`:

```javascript
class TimedPractice {
    constructor(durationMinutes = 30) {
        this.duration = durationMinutes * 60000;
        this.startTime = null;
        this.endTime = null;
        this.problemsAttempted = 0;
        this.problemsCorrect = 0;
    }

    start() {
        this.startTime = Date.now();
        this.endTime = this.startTime + this.duration;
        this.displayTimer();
    }

    displayTimer() {
        const interval = setInterval(() => {
            const now = Date.now();
            const remaining = Math.max(0, this.endTime - now);
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            
            document.getElementById('timer').textContent = 
                `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            if (remaining === 0) {
                clearInterval(interval);
                this.endSession();
            }
        }, 100);
    }

    endSession() {
        const accuracy = (this.problemsCorrect / this.problemsAttempted) * 100;
        UIHelper.showNotification(
            `Practice Session Complete! ${this.problemsCorrect}/${this.problemsAttempted} correct (${accuracy}%)`,
            'success'
        );
    }
}
```

### 9. Spaced Repetition System

Implement adaptive learning:

```javascript
class SpacedRepetition {
    constructor() {
        this.intervals = [1, 3, 7, 14, 30]; // days
        this.performanceHistory = {};
    }

    shouldReview(problemId, lastReviewDate) {
        const daysSinceReview = Math.floor(
            (Date.now() - lastReviewDate) / (1000 * 60 * 60 * 24)
        );
        const nextInterval = this.getNextInterval(problemId);
        return daysSinceReview >= nextInterval;
    }

    getNextInterval(problemId) {
        const history = this.performanceHistory[problemId] || [];
        if (history.length === 0) return 1;
        return this.intervals[Math.min(history.length, this.intervals.length - 1)];
    }

    recordPerformance(problemId, isCorrect) {
        if (!this.performanceHistory[problemId]) {
            this.performanceHistory[problemId] = [];
        }
        this.performanceHistory[problemId].push({
            correct: isCorrect,
            timestamp: Date.now()
        });
    }
}
```

### 10. Collaborative Features (Future)

Structure for multi-user support:

```javascript
class CollaborativeNotes {
    constructor(sessionId) {
        this.sessionId = sessionId;
        this.participants = [];
        this.sharedSketches = [];
    }

    shareSketch(sketch) {
        const shared = {
            sketch: sketch,
            sharedBy: this.participants[0],
            timestamp: Date.now()
        };
        this.sharedSketches.push(shared);
        this.broadcast('sketch-shared', shared);
    }

    broadcast(event, data) {
        // Implement WebSocket or server sync
    }

    saveToCloud() {
        // Implement cloud storage
    }
}
```

---

## 📦 Performance Optimization

### Canvas Rendering Optimization

```javascript
// Use requestAnimationFrame for smooth animations
function optimizedDraw() {
    requestAnimationFrame(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Draw operations
        optimizedDraw();
    });
}

// Use OffscreenCanvas for heavy operations
const offscreen = new OffscreenCanvas(width, height);
const offscreenCtx = offscreen.getContext('2d');
```

### localStorage Optimization

```javascript
// Compress data before storing
const compressionHelper = {
    compress: (data) => {
        return btoa(JSON.stringify(data));
    },
    decompress: (data) => {
        return JSON.parse(atob(data));
    }
};
```

---

## 🔌 Plugin System

Create extensible plugin architecture:

```javascript
class PluginManager {
    constructor() {
        this.plugins = [];
    }

    register(plugin) {
        this.plugins.push(plugin);
        plugin.init();
    }

    trigger(event, data) {
        this.plugins.forEach(plugin => {
            if (plugin.handlers && plugin.handlers[event]) {
                plugin.handlers[event](data);
            }
        });
    }
}

// Example plugin
const statsPlugin = {
    init: function() {
        console.log('Stats plugin initialized');
    },
    handlers: {
        'problem-solved': function(data) {
            console.log('Problem solved:', data);
        }
    }
};
```

---

## 🎨 CSS Variables Reference

```css
/* Colors */
--primary-color:       Main accent (glow effects)
--secondary-color:     Secondary accent
--accent-color:        Highlights
--success-color:       Success feedback (#00ff88)
--error-color:         Error feedback (#ff4466)
--warning-color:       Warning feedback (#ffaa00)

/* Backgrounds */
--bg-dark:             Card/panel backgrounds
--bg-darker:           Main page background
--bg-card:             Card element background

/* Text */
--text-primary:        Main text
--text-secondary:      Muted text

/* Borders */
--border-color:        Border accent
```

---

## 📱 Responsive Design Tips

```css
/* Mobile-first approach */
@media (max-width: 768px) {
    .main-layout {
        grid-template-columns: 1fr;
    }
    
    .canvas {
        height: 300px;
    }
}

@media (max-width: 480px) {
    .tool-group {
        flex-direction: column;
    }
    
    .options-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## 🧪 Testing Your Extensions

```javascript
// Test analytics
console.log(Storage.getStatistics());

// Test problem generation
console.log(getRandomProblem('calculus-1'));

// Test drawing
window.sketchbook.drawLine(0, 0, 100, 100, '#00ff88', 5);

// Test animations
AnimationHelper.pulse(document.querySelector('.btn-primary'));
```

---

## 🚀 Deployment

### Static Hosting (Recommended)
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

### Local Testing
```bash
# Simple HTTP server
python -m http.server 8000
# or
npx http-server
```

---

## 📚 Learning Resources

- **MathJax**: https://docs.mathjax.org/
- **Canvas API**: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- **Service Workers**: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
- **Web Storage**: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

---

## 🔧 Debugging Tips

```javascript
// Enable verbose logging
window.DEBUG = true;

// Check localStorage
console.log(JSON.parse(localStorage.getItem('studyhub_history')));

// Monitor canvas
console.log('Canvas dimensions:', 
    window.sketchbook.canvas.width, 
    window.sketchbook.canvas.height
);

// Check MathJax
MathJax.typesetPromise().then(() => console.log('MathJax ready'));
```

---

## 📝 Contributing

To extend StudyHub:

1. **Fork/Clone the repository**
2. **Create a feature branch** (`feature/your-feature`)
3. **Follow the existing code style**
4. **Test thoroughly** in multiple browsers
5. **Document** your changes
6. **Submit a pull request**

---

## 🎓 Happy Coding!

Remember: **Great tools make great learners.** Keep innovating! ✨
