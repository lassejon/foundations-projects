const hands = ["rock", "paper", "scissors"];
let scorePlayer = 0;
let scoreComputer = 0;

function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    return hands[rand];
}

function game(playerSelection, computerSelection) {
    result.textContent = playGame(playerSelection, computerPlay());
    scores.textContent = `Player score: ${scorePlayer}         Computer score: ${scoreComputer}`;
    if (isGameOver()) {
        scoresResult.textContent = scorePlayer > scoreComputer ? 
        `Player wins with the score ${scorePlayer} to ${scoreComputer}` :
        `Computer wins with the score ${scoreComputer} to ${scorePlayer}`;

        result.textContent = scorePlayer > scoreComputer ? "NICEEEE JOBBB MATE!" : "GAME OVER HAHAHA"
        gameOver();
    } else {
        scoresResult.textContent = "";
    }
}

function playGame(playerSelection, computerSelection) {
    return compareHands(playerSelection, computerSelection);
}

function compareHands(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return `It's a draw! Both player chose ${playerSelection}!`;
    }
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return youWinMessage(playerSelection, computerSelection);
        }
        return youLoseMessage(playerSelection, computerSelection);
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return youWinMessage(playerSelection, computerSelection);
        }
        return youLoseMessage(playerSelection, computerSelection);
    } else {
        if (computerSelection == "paper") {
            return youWinMessage(playerSelection, computerSelection);
        }
        return youLoseMessage(playerSelection, computerSelection);
    }
}

function gameOver() {
    scorePlayer = 0;
    scoreComputer = 0;
}

function isGameOver() {
    return scoreComputer >= 3|| scorePlayer >= 3;
}

function youWinMessage(playerSelection, computerSelection) {
    winningHand = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    scorePlayer += 1;
    return `You win this round! ${winningHand} wins over ${computerSelection}!`
}

function youLoseMessage(playerSelection, computerSelection) {
    winningHand = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    scoreComputer += 1;
    return `You lose this round! ${winningHand} wins over ${playerSelection}!`
}
