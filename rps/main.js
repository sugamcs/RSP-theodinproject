function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerChoice) {
    let win = false;
    if (playerSelection == computerChoice) {
        return "Tie";
    } else if (playerSelection.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper") {
        return "You lose(paper beats rock)";
    } else if (playerSelection.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        win = true;
        return "You win(rock beats scissors)";
    } else if (playerSelection.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        win = true;
        return "You win(paper beats rock)";
    } else if (playerSelection.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        return "You lose(scissors beats paper)"
    } else if (playerSelection.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        win = true;
        return "You win(scissors beats paper)";
    } else if (playerSelection.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        return "You lose(rock beats scissors)";
    }
    if (win === true) {
        winCount++;
        console.log("Win Count:", winCount);
    }
}

function game() {
    let computerWins = 0;
    let playerWins = 0;

        const playerChoice = prompt("What is your choice? ");
        const computerChoice = getComputerChoice();

        const roundResult = playRound(playerChoice, computerChoice);
        console.log(roundResult);

        if (roundResult.includes("win")) {
            playerWins++;
        } else if (roundResult.includes("lose")) {
            computerWins++;
        }
    

    if (playerWins > computerWins) {
        console.log("You win the game!");
    } else if (computerWins > playerWins) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}


    

// Create three buttons, one for each selection.
//  Add an event listener to the buttons
//   that call your playRound function with the correct playerSelection every time a button is clicked. 
// (you can keep the console.logs for this step)      