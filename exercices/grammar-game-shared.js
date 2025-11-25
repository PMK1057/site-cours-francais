// Fonctions partagées pour les exercices d'erreurs de grammaire

// Fonction pour jouer un son de succès
function playGrammarSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioContext.currentTime;
        
        // Créer deux oscillateurs pour un accord
        const osc1 = audioContext.createOscillator();
        const osc2 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Accord majeur (Do-Mi-Sol) mais plus simple avec juste Do-Mi
        osc1.frequency.value = 523.25; // Do (C5)
        osc2.frequency.value = 659.25; // Mi (E5)
        
        osc1.type = 'sine';
        osc2.type = 'sine';
        
        // Enveloppe douce et courte
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.2, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.25);
        osc2.stop(now + 0.25);
    } catch (error) {
        // Si l'API Web Audio n'est pas disponible, on ignore silencieusement
    }
}

// Fonction générique pour initialiser un jeu de grammaire
function initGrammarGame(questions, questionId, optionsId, resultId, explanationId, progressId, nextFunction, selectFunction) {
    let currentIndex = -1;
    let score = 0;
    let totalAnswered = 0;
    let usedQuestions = [];

    function nextQuestion() {
        const resultDiv = document.getElementById(resultId);
        const questionDiv = document.getElementById(questionId);
        const optionsDiv = document.getElementById(optionsId);
        const progressText = document.getElementById(progressId);
        
        if (resultDiv) resultDiv.style.display = 'none';
        if (optionsDiv) optionsDiv.innerHTML = '';
        
        let availableQuestions = questions.filter((_, index) => !usedQuestions.includes(index));
        
        if (availableQuestions.length === 0) {
            usedQuestions = [];
            availableQuestions = questions;
        }
        
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const selectedQuestion = availableQuestions[randomIndex];
        currentIndex = questions.indexOf(selectedQuestion);
        usedQuestions.push(currentIndex);
        
        if (questionDiv) {
            questionDiv.textContent = selectedQuestion.en;
        }
        
        if (optionsDiv) {
            const shuffledOptions = [...selectedQuestion.options].sort(() => Math.random() - 0.5);
            
            shuffledOptions.forEach((option, index) => {
                const optionButton = document.createElement('button');
                optionButton.className = 'grammar-option-btn';
                optionButton.textContent = option.text;
                optionButton.onclick = () => selectFunction(option, optionButton, selectedQuestion, currentIndex, resultId, explanationId, optionsId);
                optionsDiv.appendChild(optionButton);
            });
        }
        
        if (progressText) {
            progressText.textContent = `${usedQuestions.length} / ${questions.length} questions répondues`;
        }
    }

    function selectOption(option, buttonElement, selectedQuestion, questionIndex, resultId, explanationId, optionsId) {
        const resultDiv = document.getElementById(resultId);
        const resultExplanation = document.getElementById(explanationId);
        const optionsDiv = document.getElementById(optionsId);
        const allButtons = optionsDiv.querySelectorAll('.grammar-option-btn');
        
        allButtons.forEach(btn => {
            btn.disabled = true;
            btn.style.pointerEvents = 'none';
        });
        
        totalAnswered++;
        
        if (option.correct) {
            score++;
            buttonElement.style.backgroundColor = '#4caf50';
            buttonElement.style.color = 'white';
            playGrammarSuccessSound();
        } else {
            buttonElement.style.backgroundColor = '#f44336';
            buttonElement.style.color = 'white';
            allButtons.forEach(btn => {
                const btnText = btn.textContent.trim();
                const correctOption = selectedQuestion.options.find(opt => opt.correct);
                if (btnText === correctOption.text) {
                    btn.style.backgroundColor = '#4caf50';
                    btn.style.color = 'white';
                }
            });
        }
        
        if (option.correct) {
            resultDiv.className = 'translation-result correct';
            resultExplanation.innerHTML = `<strong>✅ Correct !</strong><br>${option.text}`;
        } else {
            resultDiv.className = 'translation-result incorrect';
            const correctOption = selectedQuestion.options.find(opt => opt.correct);
            resultExplanation.innerHTML = `<strong>❌ Incorrect</strong><br>La bonne réponse était : <strong>${correctOption.text}</strong><br><small>${option.error || ''}</small>`;
        }
        
        resultDiv.style.display = 'block';
    }

    // Exposer nextQuestion pour les boutons "Suivant"
    window[nextFunction] = nextQuestion;
    
    // Exposer selectOption pour les callbacks
    window[selectFunction] = (option, buttonElement, selectedQuestion, questionIndex, resultId, explanationId, optionsId) => {
        selectOption(option, buttonElement, selectedQuestion, questionIndex, resultId, explanationId, optionsId);
    };

    // Initialiser
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', nextQuestion);
    } else {
        setTimeout(nextQuestion, 100);
    }
}

