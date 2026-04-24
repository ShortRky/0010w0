# PROJECT STRUCTURE - StudyHub

A comprehensive guide to the StudyHub codebase structure.

---

## 📁 Complete File Organization

```
StudyHub/
├── index.html                 # Main entry point (HTML structure)
├── manifest.json              # PWA manifest configuration
├── sw.js                      # Service Worker (offline support)
├── .gitignore                 # Git ignore rules
├── README.md                  # User documentation
├── ADVANCED.md                # Advanced customization guide
├── PROJECT-STRUCTURE.md       # This file
│
├── css/
│   ├── style.css             # Main dark theme styles & layout
│   └── animations.css        # Anime-inspired animations
│
├── js/
│   ├── data.js               # Problem database for all subjects
│   ├── utils.js              # Utility functions & helpers
│   ├── problems.js           # Problem generator & MC logic
│   ├── sketchbook.js         # Drawing canvas & tools
│   └── app.js                # Main application controller
│
└── assets/                   # (Optional) For images/fonts later
```

---

## 📄 File Descriptions

### Root Level

#### `index.html` (Lines: 1-177)
- **Purpose**: Main HTML structure and layout
- **Key Sections**:
  - Header with logo and controls
  - Two-panel layout (problems + sketchbook)
  - Problem display area with multiple choice
  - Drawing canvas with tools
  - Help modal
  - Footer
- **External Libraries**: MathJax for LaTeX rendering
- **Styling**: Links to CSS files

#### `manifest.json`
- **Purpose**: Progressive Web App (PWA) configuration
- **Contains**:
  - App name and metadata
  - Icon definitions (SVG)
  - Display mode (standalone)
  - Theme colors
  - Offline support configuration

#### `sw.js` (Service Worker)
- **Purpose**: Enables offline functionality and caching
- **Key Features**:
  - Cache-first strategy for static assets
  - MathJax CDN caching
  - Offline fallback responses
  - Background sync hooks

#### `.gitignore`
- **Purpose**: Specifies files to ignore in version control
- **Excludes**: node_modules, IDE files, build outputs, OS files

#### `README.md`
- **Purpose**: User-facing documentation
- **Includes**:
  - Quick start guide
  - Feature overview
  - File structure
  - Customization examples
  - Keyboard shortcuts
  - Browser compatibility
  - Privacy assurances

#### `ADVANCED.md`
- **Purpose**: Developer reference for customization
- **Covers**:
  - Adding new problem subjects
  - Custom themes & animations
  - Advanced features (spaced repetition, etc.)
  - Performance optimization
  - Plugin system
  - Testing & debugging

---

### CSS Directory

#### `css/style.css` (Lines: 1-1000+)
- **Purpose**: Main styling for dark theme and layout
- **Sections**:
  - CSS Variables (colors, fonts, spacing)
  - Global reset & typography
  - Animated background & particles
  - Container & layout grid
  - Panel styling
  - Control groups (dropdowns, buttons, inputs)
  - Problem display & options styling
  - Solution reveal styling
  - Drawing tools interface
  - Canvas & sketch area styling
  - Text overlay elements
  - Modal dialogs
  - Footer
  - Responsive breakpoints
  - Custom scrollbar styling

#### `css/animations.css` (Lines: 1-600+)
- **Purpose**: Anime-inspired animations and visual effects
- **Animation Categories**:
  - **Entrance**: fadeIn, slideDown, slideUp, slideInLeft, etc.
  - **Loops**: float, pulse, glow, shimmer, rotate, bounce
  - **Neon**: neon-glow, gradient-shift effects
  - **Particles**: particle-float, particle-float-reverse
  - **Interactive**: button-press, button-hover-glow
  - **Waves**: wave, wave-reflect
  - **Text**: typewriter, letter-pop, blink-cursor
  - **Special**: shake, swing, spin, ripple
  - **Utilities**: hover effects, stagger delays

---

### JavaScript Directory

#### `js/data.js` (Lines: 1-350+)
- **Purpose**: Central database of all study problems
- **Structure**:
  - `problemDatabase` object with subjects as keys
  - Each subject contains `title` and `problems` array
- **Subjects**:
  - `calculus-1`: 3+ problems on limits, derivatives, critical points
  - `calculus-2`: 3+ problems on integration, series, areas
  - `calculus-3`: 3+ problems on partial derivatives, double integrals, gradients
  - `differential-equations`: 3+ problems on separable, order, linear DEs
  - `measure-theory`: 3+ problems on Cantor set, σ-algebras, measurability
  - `chemistry`: 3+ problems on molecular geometry, reactions, oxidation states
- **Problem Structure**:
  - `id`: Unique identifier
  - `question`: LaTeX-formatted question
  - `options`: Array of 4 options (1 correct, 3 incorrect)
  - `solution`: Step-by-step solution explanation
- **Exports**: `getRandomProblem()`, `getAllSubjects()`

#### `js/utils.js` (Lines: 1-600+)
- **Purpose**: Utility functions and helpers
- **Modules**:
  - **Storage**: localStorage management
    - `saveSketch()`, `getAllSketches()`, `deleteSketch()`
    - `saveProblemAttempt()`, `getProblemHistory()`
    - `getStatistics()`, `clearAll()`
  - **MathHelper**: LaTeX/MathJax rendering
    - `renderMath()`, `renderElement()`
  - **CanvasHelper**: Canvas & image operations
    - `downloadCanvas()`, `getCanvasDataURL()`, `clearCanvas()`
  - **UIHelper**: UI operations
    - `showNotification()`, `showModal()`, `hideModal()`, `updateWithAnimation()`
  - **RandomHelper**: Random operations
    - `shuffle()`, `getRandomElement()`, `getRandomNumber()`
  - **AnimationHelper**: Animation utilities
    - `pulse()`, `shake()`, `bounce()`, `fadeIn()`, `glow()`
  - **Grid Background**: Animated background initialization
  - **Keyboard Shortcuts**: Global shortcut handling

#### `js/problems.js` (Lines: 1-250+)
- **Purpose**: Problem generation and multiple-choice logic
- **Class**: `ProblemGenerator`
  - **Properties**:
    - `currentProblem`: Active problem
    - `currentOptions`: Shuffled answer choices
    - `selectedAnswer`: User's choice
    - `answered`: Completion flag
  - **Methods**:
    - `generateNewProblem()`: Get random problem and display
    - `displayProblem()`: Render problem with LaTeX
    - `displayOptions()`: Shuffle and display 4 choices
    - `selectOption()`: Handle user selection
    - `checkAnswer()`: Validate and provide feedback
    - `revealSolution()`: Display step-by-step explanation
- **Features**:
  - Option shuffling
  - Immediate feedback (correct/incorrect)
  - Animation effects
  - History tracking
  - MathJax rendering

#### `js/sketchbook.js` (Lines: 1-500+)
- **Purpose**: Drawing canvas and tools implementation
- **Class**: `Sketchbook`
  - **Properties**:
    - `canvas`: HTML5 canvas element
    - `ctx`: Canvas 2D context
    - `tool`: Current tool (pen/eraser)
    - `color`: Drawing color
    - `brushSize`: Brush size (1-50px)
    - `isDrawing`: Drawing state
    - `drawingHistory`: Undo history
    - `textOverlays`: Text note tracking
  - **Methods**:
    - `startDrawing()`, `draw()`, `stopDrawing()`: Drawing events
    - `selectTool()`: Switch between pen/eraser
    - `drawLine()`: Draw freehand line
    - `erase()`: Erase area using Bresenham algorithm
    - `clearCanvas()`: Clear all content
    - `downloadSketch()`: Export as PNG
    - `addTextInput()`: Add text overlay
    - `saveSketch()`: Persist to localStorage
    - `loadSketchIfExists()`: Restore previous sketch
    - `undo()`, `redo()`: History management
- **Features**:
  - Multiple drawing tools
  - Color picker + presets
  - Adjustable brush size
  - Text overlay capability
  - Touch support (mobile)
  - Auto-save every 30 seconds
  - Canvas resize handling

#### `js/app.js` (Lines: 1-150+)
- **Purpose**: Main application initialization and control
- **Class**: `StudyHubApp`
  - **Properties**:
    - `isDarkTheme`: Theme flag
  - **Methods**:
    - `init()`: Setup event listeners
    - `setupEventListeners()`: Button and modal handlers
    - `toggleTheme()`: Switch dark/light theme
    - `loadPreferences()`: Load saved settings
    - `initializeParticles()`: Animated particle system
    - `showStatistics()`: Display progress stats
- **Features**:
  - Theme toggle (dark/light)
  - Floating particle animation
  - Help modal management
  - Keyboard shortcut handling
  - Service Worker registration
  - Easter egg (space bar spam)
  - Welcome message

---

## 🔄 Data Flow

```
User Action
    ↓
Event Listener (HTML + JS)
    ↓
Problem Generator / Sketchbook Class
    ↓
Render to DOM
    ↓
MathJax Rendering / Canvas Drawing
    ↓
User Sees Result
    ↓
Save to localStorage (Storage Module)
```

---

## 🎯 Key Algorithms

### 1. Problem Shuffling (Random Helpers)
```
Fisher-Yates shuffle algorithm for randomizing answer options
```

### 2. Canvas Eraser (Sketchbook)
```
Bresenham line algorithm for smooth eraser paths
```

### 3. Grid Background (Utils)
```
Requestanimationframe loop with canvas transforms for smooth animation
```

### 4. Service Worker Caching (sw.js)
```
Cache-first strategy: Check cache → Fetch from network → Update cache
```

---

## 📊 Statistics Schema

```json
{
    "total": 45,
    "correct": 38,
    "accuracy": 84,
    "bySubject": {
        "calculus-1": { "total": 12, "correct": 10 },
        "chemistry": { "total": 8, "correct": 6 },
        ...
    }
}
```

---

## 💾 localStorage Keys

- `studyhub_sketches`: Array of sketch objects
- `studyhub_history`: Array of problem attempts
- `studyhub_dark_theme`: Boolean theme preference

---

## 🎨 CSS Custom Properties

Total: 14 main color/background properties
Used throughout for consistent theming and easy customization

---

## 📚 External Dependencies

| Library | Purpose | CDN |
|---------|---------|-----|
| MathJax | LaTeX rendering | https://cdn.jsdelivr.net/npm/mathjax@3 |
| ES6 Polyfill | Browser compatibility | https://polyfill.io/v3 |

---

## 🚀 Startup Sequence

1. `index.html` loads
2. CSS files parse
3. DOM DOMContentLoaded fires
4. `data.js` loads problem database
5. `utils.js` initializes grid background & shortcuts
6. `sketchbook.js` initializes drawing canvas
7. `problems.js` initializes problem generator
8. `app.js` initializes main app
9. Service Worker registration
10. Welcome notification shows

---

## 🔧 Extension Points

- Add subjects to `js/data.js`
- Add animations to `css/animations.css`
- Add utilities to `js/utils.js`
- Extend classes with inheritance
- Add themes by modifying CSS variables

---

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px (two-panel layout)
- **Tablet**: 768px - 1200px (stack options, full-width)
- **Mobile**: < 768px (single-column layout, larger touch targets)

---

## ✅ Checklist for Custom Builds

- [ ] Update `manifest.json` with your app info
- [ ] Add custom problems to `js/data.js`
- [ ] Modify colors in `css/style.css`
- [ ] Update `README.md` with your description
- [ ] Test in target browsers
- [ ] Verify offline functionality (sw.js)
- [ ] Test touch events (mobile/tablet)
- [ ] Check MathJax rendering
- [ ] Validate localStorage functionality

---

This document serves as a complete technical reference for understanding, extending, and maintaining the StudyHub platform.
