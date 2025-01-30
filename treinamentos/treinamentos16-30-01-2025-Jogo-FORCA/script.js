const wordDisplay = document.getElementById('word-display');
const message = document.getElementById('message');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const attemptsLeft = document.getElementById('attempts-left');

let word;
let guessedLetters;
let attempts;

const words = ["javascript", "html", "css", "programacao", "desenvolvimento"];

function startGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessedLetters = Array(word.length).fill('_');
    attempts = 6;

    updateDisplay();
}

function updateDisplay() {
    wordDisplay.textContent = guessedLetters.join(' ');
    attemptsLeft.textContent = `Tentativas restantes: ${attempts}`;
}

function checkGuess() {
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
        message.textContent = "Por favor, insira uma letra válida.";
        return;
    }

    if (guessedLetters.includes(guess)) {
        message.textContent = "Você já tentou essa letra.";
        return;
    }

    let correctGuess = false;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            guessedLetters[i] = guess;
            correctGuess = true;
        }
    }

    if (correctGuess) {
        message.textContent = "Letra correta!";
    } else {
        message.textContent = "Letra incorreta.";
        attempts--;
    }

    updateDisplay();
    checkGameOver();
    guessInput.value = '';
}

function checkGameOver() {
    if (!guessedLetters.includes('_')) {
        message.textContent = "Você venceu!";
        endGame();
    } else if (attempts === 0) {
        message.textContent = `Você perdeu! A palavra era "${word}".`;
        endGame();
    }
}

function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
}

guessButton.addEventListener('click', checkGuess);

startGame();