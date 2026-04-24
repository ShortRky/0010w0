/* ============================================
   problems.js - Problem Generator & Multiple Choice
   ============================================ */

class ProblemGenerator {
    constructor() {
        this.currentProblem = null;
        this.currentOptions = [];
        this.selectedAnswer = null;
        this.answered = false;
        this.init();
    }

    init() {
        // Generate button listener
        document.getElementById('generate-btn').addEventListener('click', () => this.generateNewProblem());

        // Option buttons listener
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('option-btn') && !this.answered) {
                this.selectOption(e.target);
            }
        });

        // Reveal solution button
        document.getElementById('reveal-solution-btn').addEventListener('click', () => this.revealSolution());
    }

    generateNewProblem() {
        const subjectSelect = document.getElementById('subject-select');
        const selectedSubject = subjectSelect.value;

        if (!selectedSubject) {
            UIHelper.showNotification('Please select a subject first!', 'error', 3000);
            return;
        }

        // Get random problem
        this.currentProblem = getRandomProblem(selectedSubject);
        if (!this.currentProblem) {
            UIHelper.showNotification('Problem not found!', 'error');
            return;
        }

        this.selectedAnswer = null;
        this.answered = false;

        // Display problem
        this.displayProblem();
        
        // Shuffle and display options
        this.displayOptions();

        // Reset solution
        document.getElementById('solution-container').style.display = 'none';
        document.getElementById('solution-steps').style.display = 'none';
        document.getElementById('feedback-container').innerHTML = '';

        // Add animation
        const problemContainer = document.getElementById('problem-container');
        problemContainer.style.animation = 'none';
        setTimeout(() => {
            problemContainer.style.animation = 'fadeInUp 0.5s ease-out';
        }, 10);
    }

    displayProblem() {
        const container = document.getElementById('problem-container');
        container.innerHTML = `
            <div class="problem-content">
                <p class="problem-title">Problem:</p>
                <div class="problem-statement">${this.currentProblem.question}</div>
            </div>
        `;

        // Render MathJax
        setTimeout(() => MathHelper.renderElement(container), 100);
    }

    displayOptions() {
        const container = document.getElementById('options-container');
        const grid = document.getElementById('options-grid');

        // Shuffle options
        const shuffledOptions = RandomHelper.shuffle(this.currentProblem.options);
        this.currentOptions = shuffledOptions;

        // Create option buttons
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

        // Render MathJax in options
        setTimeout(() => MathHelper.renderElement(grid), 100);
    }

    selectOption(button) {
        if (this.answered) return;

        // Remove previous selection
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));

        // Mark as selected
        button.classList.add('selected');
        this.selectedAnswer = {
            index: button.dataset.index,
            text: button.textContent.trim(),
            correct: button.dataset.correct === 'true'
        };

        // Disable other options
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
        });

        // Check answer
        this.checkAnswer();
    }

    checkAnswer() {
        this.answered = true;

        const optionButtons = document.querySelectorAll('.option-btn');
        const feedbackContainer = document.getElementById('feedback-container');

        let correctButtonIndex = -1;

        // Find and highlight correct answer
        optionButtons.forEach((btn, index) => {
            if (btn.dataset.correct === 'true') {
                correctButtonIndex = index;
                btn.classList.add('correct');
                btn.style.animation = 'pulse 0.6s ease-out';
            }
        });

        // Highlight selected answer
        const selectedBtn = optionButtons[this.selectedAnswer.index];
        if (!this.selectedAnswer.correct) {
            selectedBtn.classList.add('incorrect');
            AnimationHelper.shake(selectedBtn);
        } else {
            AnimationHelper.pulse(selectedBtn);
        }

        // Show feedback
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = `feedback ${this.selectedAnswer.correct ? 'success' : 'error'}`;
        
        if (this.selectedAnswer.correct) {
            feedbackDiv.innerHTML = '✓ Correct! Well done! 🎉';
            AnimationHelper.pulse(document.querySelector('.problem-panel'));
        } else {
            feedbackDiv.innerHTML = '✗ Incorrect. The correct answer is highlighted. Click below to see the step-by-step solution.';
        }

        feedbackContainer.appendChild(feedbackDiv);

        // Save attempt to history
        Storage.saveProblemAttempt(this.currentProblem, this.selectedAnswer, this.selectedAnswer.correct);

        // Show solution reveal button
        document.getElementById('solution-container').style.display = 'block';

        // Render MathJax
        MathHelper.renderElement(feedbackContainer);
    }

    revealSolution() {
        const solutionSteps = document.getElementById('solution-steps');
        
        if (solutionSteps.style.display === 'block') {
            solutionSteps.style.display = 'none';
            document.getElementById('reveal-solution-btn').textContent = 'Reveal Step-by-Step Solution';
            return;
        }

        // Build steps HTML
        let stepsHTML = '';
        this.currentProblem.solution.forEach((step, index) => {
            stepsHTML += `
                <div class="step stagger-${(index % 5) + 1}">
                    <span class="step-number">${index + 1}</span>
                    <div class="step-content">${step.text}</div>
                </div>
            `;
        });

        solutionSteps.innerHTML = stepsHTML;
        solutionSteps.style.display = 'block';
        document.getElementById('reveal-solution-btn').textContent = 'Hide Solution';

        // Render MathJax
        setTimeout(() => {
            MathHelper.renderElement(solutionSteps);
        }, 100);

        // Scroll into view
        solutionSteps.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.problemGenerator = new ProblemGenerator();
});
