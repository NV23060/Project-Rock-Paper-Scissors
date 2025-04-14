// Rock Paper Scissors Game

// Computer's choice function
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Determine winner function
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "tie";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "user";
    } else {
        return "computer";
    }
}

// Game logic and UI update
let userScore = 0;
let computerScore = 0;

// Update the score on the webpage
function updateScore() {
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}

// Display result
function displayResult(result, userChoice, computerChoice) {
    let resultMessage = '';
    if (result === 'tie') {
        resultMessage = `It's a tie! Both chose ${userChoice}.`;
    } else if (result === 'user') {
        resultMessage = `You win this round! ${userChoice} beats ${computerChoice}.`;
    } else {
        resultMessage = `Computer wins this round! ${computerChoice} beats ${userChoice}.`;
    }
    document.getElementById('roundResult').textContent = resultMessage;
}

// Check if the game is over
function checkGameOver() {
    if (userScore === 3) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 3) {
        alert("Game over! The computer won the game.");
        resetGame();
    }
}

// Reset game function
function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById('roundResult').textContent = '';
}

// Add event listeners for buttons
document.getElementById('rock').addEventListener('click', function() {
    const userChoice = 'rock';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    if (result === "user") {
        userScore++;
    } else if (result === "computer") {
        computerScore++;
    }
    
    updateScore();
    displayResult(result, userChoice, computerChoice);
    checkGameOver();
});

document.getElementById('paper').addEventListener('click', function() {
    const userChoice = 'paper';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    if (result === "user") {
        userScore++;
    } else if (result === "computer") {
        computerScore++;
    }
    
    updateScore();
    displayResult(result, userChoice, computerChoice);
    checkGameOver();
});

document.getElementById('scissors').addEventListener('click', function() {
    const userChoice = 'scissors';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    if (result === "user") {
        userScore++;
    } else if (result === "computer") {
        computerScore++;
    }
    
    updateScore();
    displayResult(result, userChoice, computerChoice);
    checkGameOver();
});
