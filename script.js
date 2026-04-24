/* ============================================
   STUDYHUB - COMPLETE JAVASCRIPT
   All functionality in one file
   ============================================ */

// ============================================
// PROBLEM DATABASE
// ============================================

const problemDatabase = {
    'calculus-1': {
        title: 'Calculus I: Limits & Derivatives',
        problems: [
            {
                id: 1,
                question: 'Find the derivative of $$f(x) = 3x^2 - 2x + 5$$',
                options: [
                    { text: '$$6x - 2$$', correct: true },
                    { text: '$$3x - 2$$', correct: false },
                    { text: '$$6x^2 - 2$$', correct: false },
                    { text: '$$9x - 2$$', correct: false }
                ],
                solution: [
                    { text: 'We need to find $$\\frac{d}{dx}[3x^2 - 2x + 5]$$' },
                    { text: 'Using the power rule: $$\\frac{d}{dx}[x^n] = nx^{n-1}$$' },
                    { text: 'Apply to each term:' },
                    { text: '- $$\\frac{d}{dx}[3x^2] = 3 \\cdot 2x = 6x$$' },
                    { text: '- $$\\frac{d}{dx}[-2x] = -2$$' },
                    { text: '- $$\\frac{d}{dx}[5] = 0$$' },
                    { text: 'Therefore: $$f\'(x) = 6x - 2$$' }
                ]
            },
            {
                id: 2,
                question: 'Evaluate the limit: $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$',
                options: [
                    { text: '$$4$$', correct: true },
                    { text: '$$2$$', correct: false },
                    { text: '$$0$$', correct: false },
                    { text: 'Does not exist', correct: false }
                ],
                solution: [
                    { text: 'The numerator factors as: $$x^2 - 4 = (x+2)(x-2)$$' },
                    { text: 'So: $$\\frac{x^2 - 4}{x - 2} = \\frac{(x+2)(x-2)}{x-2}$$' },
                    { text: 'Cancel the common factor (valid as $$x \\neq 2$$):' },
                    { text: '$$= x + 2$$' },
                    { text: 'Now take the limit as $$x \\to 2$$:' },
                    { text: '$$\\lim_{x \\to 2} (x + 2) = 2 + 2 = 4$$' }
                ]
            },
            {
                id: 3,
                question: 'Find the critical points of $$f(x) = x^3 - 3x^2 + 2$$',
                options: [
                    { text: '$$x = 0, x = 2$$', correct: true },
                    { text: '$$x = 1, x = 2$$', correct: false },
                    { text: '$$x = 0, x = 1$$', correct: false },
                    { text: '$$x = 1, x = 3$$', correct: false }
                ],
                solution: [
                    { text: 'Critical points occur where $$f\'(x) = 0$$' },
                    { text: 'Find the derivative: $$f\'(x) = 3x^2 - 6x$$' },
                    { text: 'Factor: $$f\'(x) = 3x(x - 2)$$' },
                    { text: 'Set equal to zero: $$3x(x - 2) = 0$$' },
                    { text: 'Solutions: $$x = 0$$ and $$x = 2$$' }
                ]
            }
        ]
    },
    'calculus-2': {
        title: 'Calculus II: Integration & Series',
        problems: [
            {
                id: 1,
                question: 'Evaluate the indefinite integral: $$\\int (3x^2 + 2x) \\, dx$$',
                options: [
                    { text: '$$x^3 + x^2 + C$$', correct: true },
                    { text: '$$x^3 + 2x + C$$', correct: false },
                    { text: '$$3x^3 + x^2 + C$$', correct: false },
                    { text: '$$x^3 + x^2$$', correct: false }
                ],
                solution: [
                    { text: 'Use the power rule for integration: $$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$$' },
                    { text: '$$\\int 3x^2 \\, dx = 3 \\cdot \\frac{x^3}{3} = x^3$$' },
                    { text: '$$\\int 2x \\, dx = 2 \\cdot \\frac{x^2}{2} = x^2$$' },
                    { text: 'Therefore: $$\\int (3x^2 + 2x) \\, dx = x^3 + x^2 + C$$' }
                ]
            },
            {
                id: 2,
                question: 'Does the series $$\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$$ converge?',
                options: [
                    { text: 'Yes, by p-test with p=2 > 1', correct: true },
                    { text: 'No, diverges to infinity', correct: false },
                    { text: 'Converges by ratio test', correct: false },
                    { text: 'Cannot be determined', correct: false }
                ],
                solution: [
                    { text: 'This is a p-series: $$\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$$' },
                    { text: 'The p-series test states: converges if $$p > 1$$, diverges if $$p \\leq 1$$' },
                    { text: 'Here, $$p = 2 > 1$$' },
                    { text: 'Therefore, the series converges.' },
                    { text: 'In fact, $$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$ (Basel problem)' }
                ]
            },
            {
                id: 3,
                question: 'Find the area under $$f(x) = x$$ from $$x=0$$ to $$x=3$$',
                options: [
                    { text: '$$\\frac{9}{2}$$', correct: true },
                    { text: '$$3$$', correct: false },
                    { text: '$$9$$', correct: false },
                    { text: '$$6$$', correct: false }
                ],
                solution: [
                    { text: 'Use the definite integral: $$\\int_0^3 x \\, dx$$' },
                    { text: 'Find the antiderivative: $$\\int x \\, dx = \\frac{x^2}{2}$$' },
                    { text: 'Evaluate using FTC: $$\\left[\\frac{x^2}{2}\\right]_0^3 = \\frac{3^2}{2} - \\frac{0^2}{2}$$' },
                    { text: '$$= \\frac{9}{2} - 0 = \\frac{9}{2}$$' }
                ]
            }
        ]
    },
    'calculus-3': {
        title: 'Calculus III: Multivariable Calculus',
        problems: [
            {
                id: 1,
                question: 'Find $$\\frac{\\partial f}{\\partial x}$$ where $$f(x,y) = 2x^2y + 3xy^2$$',
                options: [
                    { text: '$$4xy + 3y^2$$', correct: true },
                    { text: '$$2x^2 + 3xy$$', correct: false },
                    { text: '$$4xy + 6y$$', correct: false },
                    { text: '$$2xy + 3y^2$$', correct: false }
                ],
                solution: [
                    { text: 'Treat $$y$$ as a constant and differentiate with respect to $$x$$' },
                    { text: '$$\\frac{\\partial}{\\partial x}[2x^2y] = 2y \\cdot 2x = 4xy$$' },
                    { text: '$$\\frac{\\partial}{\\partial x}[3xy^2] = 3y^2 \\cdot 1 = 3y^2$$' },
                    { text: 'Therefore: $$\\frac{\\partial f}{\\partial x} = 4xy + 3y^2$$' }
                ]
            },
            {
                id: 2,
                question: 'Calculate the double integral: $$\\int_0^2 \\int_0^1 xy \\, dy \\, dx$$',
                options: [
                    { text: '$$1$$', correct: true },
                    { text: '$$2$$', correct: false },
                    { text: '$$\\frac{1}{2}$$', correct: false },
                    { text: '$$4$$', correct: false }
                ],
                solution: [
                    { text: 'First integrate with respect to $$y$$:' },
                    { text: '$$\\int_0^1 xy \\, dy = x \\int_0^1 y \\, dy = x \\left[\\frac{y^2}{2}\\right]_0^1 = x \\cdot \\frac{1}{2} = \\frac{x}{2}$$' },
                    { text: 'Then integrate with respect to $$x$$:' },
                    { text: '$$\\int_0^2 \\frac{x}{2} \\, dx = \\frac{1}{2} \\int_0^2 x \\, dx = \\frac{1}{2} \\left[\\frac{x^2}{2}\\right]_0^2 = \\frac{1}{2} \\cdot 2 = 1$$' }
                ]
            },
            {
                id: 3,
                question: 'Find the gradient vector of $$f(x,y) = x^2 + y^2$$ at the point $$(1,1)$$',
                options: [
                    { text: '$$\\langle 2, 2 \\rangle$$', correct: true },
                    { text: '$$\\langle 1, 1 \\rangle$$', correct: false },
                    { text: '$$\\langle 2, 1 \\rangle$$', correct: false },
                    { text: '$$\\langle 0, 0 \\rangle$$', correct: false }
                ],
                solution: [
                    { text: 'The gradient is: $$\\nabla f = \\langle \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\rangle$$' },
                    { text: '$$\\frac{\\partial f}{\\partial x} = 2x$$ and $$\\frac{\\partial f}{\\partial y} = 2y$$' },
                    { text: 'At the point $$(1,1)$$:' },
                    { text: '$$\\nabla f(1,1) = \\langle 2(1), 2(1) \\rangle = \\langle 2, 2 \\rangle$$' }
                ]
            }
        ]
    },
    'differential-equations': {
        title: 'Differential Equations',
        problems: [
            {
                id: 1,
                question: 'Solve the differential equation: $$\\frac{dy}{dx} = 2y$$',
                options: [
                    { text: '$$y = Ce^{2x}$$', correct: true },
                    { text: '$$y = Ce^x$$', correct: false },
                    { text: '$$y = 2e^x + C$$', correct: false },
                    { text: '$$y = e^{2x} + C$$', correct: false }
                ],
                solution: [
                    { text: 'This is a separable differential equation.' },
                    { text: 'Separate variables: $$\\frac{dy}{y} = 2 \\, dx$$' },
                    { text: 'Integrate both sides: $$\\int \\frac{dy}{y} = \\int 2 \\, dx$$' },
                    { text: '$$\\ln|y| = 2x + C_1$$' },
                    { text: 'Exponentiate: $$|y| = e^{2x + C_1} = e^{C_1} \\cdot e^{2x}$$' },
                    { text: 'Let $$C = \\pm e^{C_1}$$: $$y = Ce^{2x}$$' }
                ]
            },
            {
                id: 2,
                question: 'What is the order of the differential equation: $$\\frac{d^3y}{dx^3} + 2\\frac{d^2y}{dx^2} - y = 0$$?',
                options: [
                    { text: 'Third order', correct: true },
                    { text: 'Second order', correct: false },
                    { text: 'First order', correct: false },
                    { text: 'Fourth order', correct: false }
                ],
                solution: [
                    { text: 'The order of a differential equation is determined by the highest derivative present.' },
                    { text: 'In this equation: $$\\frac{d^3y}{dx^3} + 2\\frac{d^2y}{dx^2} - y = 0$$' },
                    { text: 'The highest derivative is $$\\frac{d^3y}{dx^3}$$ (third derivative)' },
                    { text: 'Therefore, this is a third-order differential equation.' }
                ]
            },
            {
                id: 3,
                question: 'Solve: $$\\frac{dy}{dx} + y = e^x$$ with initial condition $$y(0) = 1$$',
                options: [
                    { text: '$$y = \\frac{1}{2}(e^x + e^{-x})$$', correct: true },
                    { text: '$$y = e^x$$', correct: false },
                    { text: '$$y = xe^x + e^{-x}$$', correct: false },
                    { text: '$$y = e^x + e^{-x}$$', correct: false }
                ],
                solution: [
                    { text: 'This is a first-order linear differential equation.' },
                    { text: 'The integrating factor is: $$\\mu(x) = e^{\\int 1 \\, dx} = e^x$$' },
                    { text: 'Multiply both sides by $$e^x$$: $$e^x\\frac{dy}{dx} + e^xy = e^{2x}$$' },
                    { text: 'The left side is $$\\frac{d}{dx}[e^xy]$$' },
                    { text: '$$\\frac{d}{dx}[e^xy] = e^{2x}$$' },
                    { text: 'Integrate: $$e^xy = \\frac{1}{2}e^{2x} + C$$' },
                    { text: 'Use $$y(0) = 1$$: $$e^0 \\cdot 1 = \\frac{1}{2}e^0 + C \\Rightarrow 1 = \\frac{1}{2} + C \\Rightarrow C = \\frac{1}{2}$$' },
                    { text: 'Therefore: $$y = \\frac{1}{2}(e^x + e^{-x})$$' }
                ]
            }
        ]
    },
    'measure-theory': {
        title: 'Measure Theory',
        problems: [
            {
                id: 1,
                question: 'What is the Lebesgue measure of the Cantor set?',
                options: [
                    { text: '$$0$$', correct: true },
                    { text: '$$1$$', correct: false },
                    { text: '$$\\frac{1}{2}$$', correct: false },
                    { text: 'Undefined', correct: false }
                ],
                solution: [
                    { text: 'The Cantor set is constructed by repeatedly removing middle thirds from intervals.' },
                    { text: 'In iteration 1: Remove interval of length $$\\frac{1}{3}$$' },
                    { text: 'In iteration 2: Remove two intervals of length $$\\frac{1}{9}$$' },
                    { text: 'In iteration n: Remove $$2^{n-1}$$ intervals, each of length $$\\frac{1}{3^n}$$' },
                    { text: 'Total length removed: $$\\sum_{n=1}^{\\infty} 2^{n-1} \\cdot \\frac{1}{3^n} = \\frac{1}{3}\\sum_{n=0}^{\\infty} \\left(\\frac{2}{3}\\right)^n = \\frac{1}{3} \\cdot \\frac{1}{1-\\frac{2}{3}} = 1$$' },
                    { text: 'Since the entire interval has measure 1 and we remove measure 1, the Cantor set has measure 0.' }
                ]
            },
            {
                id: 2,
                question: 'Which statement is TRUE about $$\\sigma$$-algebras?',
                options: [
                    { text: 'Closed under countable unions and complements', correct: true },
                    { text: 'Closed only under finite unions', correct: false },
                    { text: 'Must contain uncountably many sets', correct: false },
                    { text: 'Can contain only countable sets', correct: false }
                ],
                solution: [
                    { text: 'A $$\\sigma$$-algebra (sigma-algebra) on a set $X$ is a collection $\\mathcal{A}$ of subsets satisfying:' },
                    { text: '1. $$\\emptyset \\in \\mathcal{A}$$' },
                    { text: '2. If $$A \\in \\mathcal{A}$$, then $$A^c \\in \\mathcal{A}$$ (closed under complements)' },
                    { text: '3. If $$\\{A_n\\}_{n=1}^\\infty \\in \\mathcal{A}$$, then $$\\bigcup_{n=1}^\\infty A_n \\in \\mathcal{A}$$ (closed under countable unions)' },
                    { text: 'The correct statement is: A $$\\sigma$$-algebra is closed under countable unions and complements.' }
                ]
            },
            {
                id: 3,
                question: 'If $$f: \\mathbb{R} \\to \\mathbb{R}$$ is measurable and $$g \\circ f$$ is defined, when is $$g \\circ f$$ measurable?',
                options: [
                    { text: 'When $g$ is measurable (Borel)', correct: true },
                    { text: 'When $f$ is continuous', correct: false },
                    { text: 'When $g$ is continuous', correct: false },
                    { text: 'Always, regardless of $g$', correct: false }
                ],
                solution: [
                    { text: 'The composition of measurable functions is measurable under certain conditions.' },
                    { text: 'If $$f$$ is measurable and $$g$$ is Borel measurable, then $$g \\circ f$$ is measurable.' },
                    { text: 'This is because the preimage of a Borel set under a Borel measurable function is Borel.' },
                    { text: 'And the preimage of a measurable set under a measurable function is measurable.' }
                ]
            }
        ]
    },
    'chemistry': {
        title: 'Chemistry: Molecular & Organic',
        problems: [
            {
                id: 1,
                question: 'What is the molecular geometry of methane ($$\\text{CH}_4$$) around the central carbon atom?',
                options: [
                    { text: 'Tetrahedral', correct: true },
                    { text: 'Trigonal planar', correct: false },
                    { text: 'Linear', correct: false },
                    { text: 'Octahedral', correct: false }
                ],
                solution: [
                    { text: 'Methane has the molecular formula $$\\text{CH}_4$$' },
                    { text: 'Carbon (central atom) has 4 valence electrons' },
                    { text: 'It forms 4 single bonds with 4 hydrogen atoms' },
                    { text: 'With 4 bonding pairs and 0 lone pairs, VSEPR theory predicts tetrahedral geometry' },
                    { text: 'Bond angle: approximately $$109.5°$$' }
                ]
            },
            {
                id: 2,
                question: 'Which reaction type is: $$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\to 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$$?',
                options: [
                    { text: 'Fermentation (anaerobic oxidation)', correct: true },
                    { text: 'Combustion', correct: false },
                    { text: 'Polymerization', correct: false },
                    { text: 'Hydrolysis', correct: false }
                ],
                solution: [
                    { text: 'This equation shows glucose converting to ethanol and carbon dioxide' },
                    { text: 'This occurs under anaerobic (oxygen-free) conditions' },
                    { text: 'Glucose ($$\\text{C}_6\\text{H}_{12}\\text{O}_6$$) is oxidized to produce ethanol ($$\\text{C}_2\\text{H}_5\\text{OH}$$) and CO₂' },
                    { text: 'This is the process of alcoholic fermentation' },
                    { text: 'This process occurs in yeast and some bacteria to produce energy without oxygen' }
                ]
            },
            {
                id: 3,
                question: 'What is the oxidation state of sulfur in $$\\text{H}_2\\text{SO}_4$$?',
                options: [
                    { text: '$$+6$$', correct: true },
                    { text: '$$+4$$', correct: false },
                    { text: '$$+2$$', correct: false },
                    { text: '$$-2$$', correct: false }
                ],
                solution: [
                    { text: 'To find the oxidation state of S in $$\\text{H}_2\\text{SO}_4$$:' },
                    { text: 'Apply oxidation state rules:' },
                    { text: '• Hydrogen is typically $$+1$$, oxygen is typically $$-2$$' },
                    { text: '• Let $$x$$ = oxidation state of S' },
                    { text: '$$2(+1) + x + 4(-2) = 0$$' },
                    { text: '$$+2 + x - 8 = 0$$' },
                    { text: '$$x = +6$$' },
                    { text: 'Sulfur is in its highest oxidation state in sulfuric acid.' }
                ]
            }
        ]
    }
};

function getRandomProblem(subjectId) {
    const subject = problemDatabase[subjectId];
    if (!subject) return null;
    const problems = subject.problems;
    const randomIndex = Math.floor(Math.random() * problems.length);
    return {
        ...problems[randomIndex],
        subject: subject.title
    };
}

// ============================================
// UTILITIES & HELPERS
// ============================================

const Storage = {
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

    getAllSketches: function() {
        const data = localStorage.getItem('studyhub_sketches');
        return data ? JSON.parse(data) : [];
    },

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

    getProblemHistory: function() {
        const data = localStorage.getItem('studyhub_history');
        return data ? JSON.parse(data) : [];
    }
};

const MathHelper = {
    renderMath: function() {
        if (window.MathJax) {
            MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
        }
    },

    renderElement: function(element) {
        if (window.MathJax) {
            MathJax.typesetPromise([element]).catch(err => console.log('MathJax error:', err));
        }
    }
};

const UIHelper = {
    showNotification: function(message, type = 'info', duration = 3000) {
        const feedbackContainer = document.getElementById('feedback-container');
        if (!feedbackContainer) return;

        const notification = document.createElement('div');
        notification.className = `feedback ${type}`;
        notification.textContent = message;

        feedbackContainer.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, duration);
    },

    showModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
        }
    },

    hideModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }
};

const RandomHelper = {
    shuffle: function(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};

const AnimationHelper = {
    pulse: function(element, duration = 500) {
        element.style.animation = `pulse ${duration}ms ease-out`;
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    },

    shake: function(element, duration = 500) {
        element.style.animation = `shake ${duration}ms ease-out`;
        setTimeout(() => {
            element.style.animation = '';
        }, duration);
    }
};

// ============================================
// PROBLEM GENERATOR CLASS
// ============================================

class ProblemGenerator {
    constructor() {
        this.currentProblem = null;
        this.currentOptions = [];
        this.selectedAnswer = null;
        this.answered = false;
        this.init();
    }

    init() {
        document.getElementById('generate-btn').addEventListener('click', () => this.generateNewProblem());
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('option-btn') && !this.answered) {
                this.selectOption(e.target);
            }
        });
        document.getElementById('reveal-solution-btn').addEventListener('click', () => this.revealSolution());
    }

    generateNewProblem() {
        const subjectSelect = document.getElementById('subject-select');
        const selectedSubject = subjectSelect.value;

        if (!selectedSubject) {
            UIHelper.showNotification('Please select a subject first!', 'error', 3000);
            return;
        }

        this.currentProblem = getRandomProblem(selectedSubject);
        if (!this.currentProblem) {
            UIHelper.showNotification('Problem not found!', 'error');
            return;
        }

        this.selectedAnswer = null;
        this.answered = false;

        this.displayProblem();
        this.displayOptions();

        document.getElementById('solution-container').style.display = 'none';
        document.getElementById('solution-steps').style.display = 'none';
        document.getElementById('feedback-container').innerHTML = '';
    }

    displayProblem() {
        const container = document.getElementById('problem-container');
        container.innerHTML = `
            <div class="problem-content">
                <p class="problem-title">Problem:</p>
                <div class="problem-statement">${this.currentProblem.question}</div>
            </div>
        `;
        setTimeout(() => MathHelper.renderElement(container), 100);
    }

    displayOptions() {
        const container = document.getElementById('options-container');
        const grid = document.getElementById('options-grid');

        const shuffledOptions = RandomHelper.shuffle(this.currentProblem.options);
        this.currentOptions = shuffledOptions;

        grid.innerHTML = '';
        const optionLabels = ['A', 'B', 'C', 'D'];
        
        shuffledOptions.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span class="option-label">${optionLabels[index]}.</span>
                ${option.text}
            `;
            btn.dataset.index = index;
            btn.dataset.correct = option.correct;
            grid.appendChild(btn);
        });

        container.style.display = 'block';
        setTimeout(() => MathHelper.renderElement(grid), 100);
    }

    selectOption(button) {
        if (this.answered) return;

        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');
        this.selectedAnswer = {
            index: button.dataset.index,
            text: button.textContent.trim(),
            correct: button.dataset.correct === 'true'
        };

        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
        });

        this.checkAnswer();
    }

    checkAnswer() {
        this.answered = true;

        const optionButtons = document.querySelectorAll('.option-btn');
        const feedbackContainer = document.getElementById('feedback-container');

        optionButtons.forEach((btn) => {
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
            }
        });

        const selectedBtn = optionButtons[this.selectedAnswer.index];
        if (!this.selectedAnswer.correct) {
            selectedBtn.classList.add('incorrect');
            AnimationHelper.shake(selectedBtn);
        } else {
            AnimationHelper.pulse(selectedBtn);
        }

        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = `feedback ${this.selectedAnswer.correct ? 'success' : 'error'}`;
        
        if (this.selectedAnswer.correct) {
            feedbackDiv.innerHTML = '✓ Correct! Well done! 🎉';
        } else {
            feedbackDiv.innerHTML = '✗ Incorrect. The correct answer is highlighted. Click below to see the step-by-step solution.';
        }

        feedbackContainer.appendChild(feedbackDiv);
        Storage.saveProblemAttempt(this.currentProblem, this.selectedAnswer, this.selectedAnswer.correct);
        document.getElementById('solution-container').style.display = 'block';
        MathHelper.renderElement(feedbackContainer);
    }

    revealSolution() {
        const solutionSteps = document.getElementById('solution-steps');
        
        if (solutionSteps.style.display === 'block') {
            solutionSteps.style.display = 'none';
            document.getElementById('reveal-solution-btn').textContent = 'Reveal Step-by-Step Solution';
            return;
        }

        let stepsHTML = '';
        this.currentProblem.solution.forEach((step, index) => {
            stepsHTML += `
                <div class="step">
                    <span class="step-number">${index + 1}</span>
                    <div class="step-content">${step.text}</div>
                </div>
            `;
        });

        solutionSteps.innerHTML = stepsHTML;
        solutionSteps.style.display = 'block';
        document.getElementById('reveal-solution-btn').textContent = 'Hide Solution';

        setTimeout(() => {
            MathHelper.renderElement(solutionSteps);
        }, 100);

        solutionSteps.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// ============================================
// SKETCHBOOK CLASS
// ============================================

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
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseout', () => this.stopDrawing());

        this.canvas.addEventListener('touchstart', (e) => this.startDrawing(e));
        this.canvas.addEventListener('touchmove', (e) => this.draw(e));
        this.canvas.addEventListener('touchend', () => this.stopDrawing());

        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectTool(e));
        });

        document.getElementById('color-picker').addEventListener('change', (e) => {
            this.color = e.target.value;
        });

        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.color = e.target.dataset.color;
                document.getElementById('color-picker').value = this.color;
            });
        });

        document.getElementById('brush-size').addEventListener('input', (e) => {
            this.brushSize = parseInt(e.target.value);
            document.getElementById('size-display').textContent = `${this.brushSize}px`;
        });

        document.getElementById('clear-all-btn').addEventListener('click', () => this.clearCanvas());
        document.getElementById('download-sketch-btn').addEventListener('click', () => this.downloadSketch());
        document.getElementById('add-text-btn').addEventListener('click', () => this.addTextInput());

        window.addEventListener('resize', () => this.resizeCanvas());
        window.addEventListener('beforeunload', () => this.saveSketch());
        setInterval(() => this.saveSketch(), 30000);
    }

    resizeCanvas() {
        const container = this.canvas.parentElement;
        const rect = container.getBoundingClientRect();
        
        const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        
        this.canvas.width = rect.width - 20;
        this.canvas.height = 400;
        
        if (imageData.data.some(val => val > 0)) {
            this.ctx.putImageData(imageData, 0, 0);
        }
    }

    selectTool(e) {
        document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        this.tool = e.target.dataset.tool;
        this.canvas.style.cursor = this.tool === 'pen' ? 'crosshair' : 'cell';
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
        // Use composite operation for clean, performant erasing
        this.ctx.save();
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.beginPath();
        this.ctx.lineWidth = size * 2;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        this.ctx.restore();
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
        const link = document.createElement('a');
        link.href = this.canvas.toDataURL('image/png');
        link.download = `sketch-${timestamp}.png`;
        link.click();
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
        Storage.saveSketch(sketchData);
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

// ============================================
// MAIN APP CLASS
// ============================================

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
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
        document.getElementById('help-btn').addEventListener('click', () => {
            UIHelper.showModal('help-modal');
        });

        const helpModal = document.getElementById('help-modal');
        const closeBtn = helpModal.querySelector('.modal-close');
        
        closeBtn.addEventListener('click', () => {
            UIHelper.hideModal('help-modal');
        });

        helpModal.addEventListener('click', (e) => {
            if (e.target === helpModal) {
                UIHelper.hideModal('help-modal');
            }
        });
    }

    toggleTheme() {
        const root = document.documentElement;
        this.isDarkTheme = !this.isDarkTheme;

        if (this.isDarkTheme) {
            root.style.setProperty('--primary-color', '#00ff88');
            root.style.setProperty('--bg-dark', '#0a0e27');
            root.style.setProperty('--text-primary', '#ffffff');
            document.getElementById('theme-toggle').textContent = '🌙';
        } else {
            root.style.setProperty('--primary-color', '#0066cc');
            root.style.setProperty('--bg-dark', '#f5f5f5');
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
            this.toggleTheme();
        }
    }

    initializeParticles() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;

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

            setTimeout(() => particle.remove(), (Math.random() * 10 + 15) * 1000);
        }

        setInterval(createParticle, 2000);

        for (let i = 0; i < 5; i++) {
            createParticle();
        }
    }
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 StudyHub initialized');
    window.app = new StudyHubApp();
    window.problemGenerator = new ProblemGenerator();
    window.sketchbook = new Sketchbook();

    UIHelper.showNotification('Welcome to StudyHub! 🎓 Select a subject to get started.', 'info', 4000);

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

// ============================================
// GRID BACKGROUND
// ============================================

function initializeGridBackground() {
    const canvas = document.getElementById('grid-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    
    let offset = 0;
    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)';
        ctx.lineWidth = 1;
        
        const gridSize = 50;
        
        for (let x = offset; x < canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        
        for (let y = offset; y < canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
        
        offset = (offset + 0.5) % gridSize;
        requestAnimationFrame(drawGrid);
    }
    
    drawGrid();
    window.addEventListener('resize', resizeCanvas);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeGridBackground();
});
