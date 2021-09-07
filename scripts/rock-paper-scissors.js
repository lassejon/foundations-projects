const hands = ["rock", "paper", "scissors"];

function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    return hands[rand];
}

function game() {
    let playerSelection;
    for (let _ = 0; _ < 10; _++) {
        playerSelection = prompt();
        console.log(playGame(playerSelection, computerPlay()));   
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

function youWinMessage(playerSelection, computerSelection) {
    winner = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    return `${winner} wins over ${computerSelection}! You Win!`
}

function youLoseMessage(playerSelection, computerSelection) {
    winner = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);;
    return `${winner} wins over ${playerSelection}! You lose!`
}

game("rock", computerPlay());