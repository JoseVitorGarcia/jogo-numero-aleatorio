// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
    const userGuess = Number(document.getElementById('guessInput').value);
    attempts++;

    if (userGuess === randomNumber) {
        window.alert(`Parabéns! Você adivinhou o número em ${attempts} tentativas!`);
        resetGame();
    } else if (userGuess < randomNumber) {
        window.alert('Muito baixo! Tente novamente.');
    } else {
        window.alert('Muito alto! Tente novamente.');
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
}
