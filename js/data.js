/* ============================================
   data.js - Problem Database
   ============================================ */

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

// Function to get a random problem from a subject
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

// Function to get all subjects
function getAllSubjects() {
    return Object.entries(problemDatabase).map(([id, data]) => ({
        id,
        title: data.title
    }));
}
