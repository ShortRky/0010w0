# StudyHub - Advanced Learning Platform

## 🎓 Welcome to StudyHub

A beautiful, fully-functional offline learning platform featuring problem generators for advanced mathematics and sciences, integrated with a persistent sketchbook for notes and derivations.

**Perfect for:**
- Calculus I, II & III preparation
- Differential Equations practice
- Measure Theory study
- Chemistry fundamentals
- Any subject with pencil-and-paper work

---

## 🚀 Quick Start

1. **Open `index.html` in any modern web browser**
   - No internet connection needed after initial load
   - All data stays locally on your device
   - Works on desktop, tablet, and mobile

2. **Select a Subject** from the dropdown menu

3. **Generate a Problem** and tackle it!

4. **Use the Sketchbook** to work through derivations, draw diagrams, or take notes

5. **Check Your Work** by revealing the step-by-step solution

---

## 🎯 Features

### Problem Generator
- **6 Advanced Topics:**
  - Calculus I: Limits & Derivatives
  - Calculus II: Integration & Series
  - Calculus III: Multivariable Calculus
  - Differential Equations
  - Measure Theory
  - Chemistry: Molecular & Organic

- **Multiple Choice Interface**
  - 1 correct answer + 3 incorrect options
  - Randomized option order each time
  - Visual feedback on selection
  - Auto-highlighting of correct answer

- **Step-by-Step Solutions**
  - Detailed mathematical explanations
  - LaTeX-rendered equations using MathJax
  - Progressive disclosure (learn at your own pace)

### Sketchbook & Notes
- **Drawing Tools**
  - Pen: Draw with any color
  - Eraser: Remove mistakes
  - Color picker + preset colors (Cyan, Pink, Orange, Green, White)
  - Adjustable brush size (1-50px)

- **Canvas Features**
  - Large, responsive drawing area
  - Persistent storage (automatically saved)
  - Text overlay capability for labels
  - Download sketches as PNG files

- **Keyboard Shortcuts**
  - **P** - Switch to Pen
  - **E** - Switch to Eraser
  - **C** - Clear Canvas
  - **D** - Download Sketch
  - **Z** - Undo (last action)
  - **?** - Help Menu

### Data Persistence
- All sketches and problem history saved locally
- No account creation needed
- No data sent to servers (100% private)
- Works completely offline after first load
- Data stays in your browser's localStorage

### Visual Design
- **Dark Theme** (anime-inspired)
  - Neon cyan, pink, and blue accents
  - Smooth, non-distracting animations
  - Animated floating particle background
  - Reactive grid background
  - Professional typography

- **Light Theme** (optional toggle)
  - Click moon/sun icon in header
  - Alternate color scheme for different preferences

### Animations & Effects
- Smooth entrance animations for all elements
- Hover effects on buttons and interactive elements
- Pulse effects for correct answers
- Shake effects for incorrect selections
- Floating particle system
- Staggered step-by-step solution reveal
- Professional transitions throughout

---

## 📐 Problem Examples

### Calculus I
- Find derivatives using power rule
- Evaluate limits
- Identify critical points

### Calculus II
- Evaluate indefinite integrals
- Determine series convergence
- Calculate definite integrals

### Calculus III
- Compute partial derivatives
- Evaluate double integrals
- Find gradient vectors

### Differential Equations
- Solve separable equations
- Identify equation order
- Solve first-order linear DEs with initial conditions

### Measure Theory
- Cantor set properties
- σ-algebra concepts
- Measurable function composition

### Chemistry
- Molecular geometry (VSEPR theory)
- Reaction type classification
- Oxidation state determination

---

## 💾 File Structure

```
StudyHub/
├── index.html              # Main HTML entry point
├── css/
│   ├── style.css          # Main dark theme styles
│   └── animations.css     # Anime-inspired animations
├── js/
│   ├── data.js            # Problem database
│   ├── utils.js           # Utility functions & helpers
│   ├── problems.js        # Problem generator logic
│   ├── sketchbook.js      # Drawing canvas implementation
│   └── app.js             # Main application controller
└── README.md              # This file
```

---

## 🛠️ Customization

### Add More Problems
Edit `js/data.js` and add to the `problemDatabase` object:

```javascript
'new-subject': {
    title: 'Subject Title',
    problems: [
        {
            id: 1,
            question: 'Your question with $$LaTeX$$ math',
            options: [
                { text: '$$\\text{Option A}$$', correct: true },
                { text: '$$\\text{Option B}$$', correct: false },
                { text: '$$\\text{Option C}$$', correct: false },
                { text: '$$\\text{Option D}$$', correct: false }
            ],
            solution: [
                { text: 'Step 1 explanation...' },
                { text: 'Step 2 explanation...' }
            ]
        }
    ]
}
```

### Change Colors
Modify CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #00ff88;      /* Main accent color */
    --secondary-color: #ff0080;    /* Secondary accent */
    --accent-color: #00d4ff;       /* Highlights */
    --bg-dark: #0a0e27;            /* Card backgrounds */
    --bg-darker: #050810;          /* Main background */
}
```

### Add Animations
Use predefined animations from `css/animations.css` or create custom ones.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| P | Switch to Pen tool |
| E | Switch to Eraser tool |
| C | Clear canvas |
| D | Download sketch |
| Z | Undo last action |
| ? | Show help menu |

---

## 📊 Progress Tracking

StudyHub automatically tracks:
- Total problems attempted
- Correct vs. incorrect answers
- Accuracy percentage by subject
- All problem history with timestamps
- Sketch creation history

This data is stored locally and never transmitted.

---

## 🌐 Browser Compatibility

- **Chrome/Chromium:** ✅ Full support
- **Firefox:** ✅ Full support
- **Safari:** ✅ Full support
- **Edge:** ✅ Full support
- **Mobile Browsers:** ✅ Touch support included

**Requirements:**
- Modern browser with ES6 support
- localStorage enabled
- Canvas 2D support
- JavaScript enabled

---

## 🔐 Privacy & Security

✅ **100% Local Processing**
- No server communication
- No data tracking or analytics
- No cookies or trackers
- All computations in-browser only

✅ **Data Control**
- All data stored in browser's localStorage
- You can clear it anytime
- Download sketches as files
- No cloud sync

---

## 📝 Tips for Best Results

1. **Use the Sketchbook While Solving**
   - Sketch diagrams as you work
   - Write intermediate steps
   - Draw chemical structures

2. **Don't Rush Solutions**
   - Read each step carefully
   - Try to understand the reasoning
   - Revisit difficult topics

3. **Track Your Progress**
   - Notice which subjects are challenging
   - Focus practice on weak areas
   - Build confidence with repeated practice

4. **Download Your Work**
   - Save sketches regularly
   - Create a portfolio of your work
   - Print for physical study materials

---

## 🎨 Customization Examples

### Change Theme Colors
```css
/* Edit css/style.css */
:root {
    --primary-color: #ff00ff;     /* Your color */
    --text-primary: #000000;      /* Your text color */
}
```

### Add New Animation
```css
/* In css/animations.css */
@keyframes my-animation {
    from { /* your start state */ }
    to { /* your end state */ }
}
```

### Modify Canvas Size
```javascript
// In js/sketchbook.js, resizeCanvas() method
this.canvas.height = 600;  // Your height
```

---

## 🚀 Future Enhancements

Potential features for expansion:
- Service Worker for offline PWA functionality
- Problem difficulty levels
- Timed quizzes
- Spaced repetition system
- Collaborative problem sets
- Export to PDF with solutions
- Cloud sync (optional)
- Dark/Light theme persistence

---

## 📧 Credits

**StudyHub** - Built with ❤️ for lifelong learners

Uses:
- **MathJax** for LaTeX rendering
- **Vanilla JavaScript** (no dependencies!)
- **CSS3** with custom animations
- **HTML5 Canvas** for drawing

---

## 📄 License

This project is free to use, modify, and distribute for personal and educational purposes.

---

## 🎓 Happy Learning!

Remember: **Consistent practice beats cramming.** Use StudyHub daily to master advanced mathematics and sciences. Your future self will thank you! 🌟

For questions or suggestions, feel free to extend this application with your own content and customizations.

**Now, get studying!** 📚✨
