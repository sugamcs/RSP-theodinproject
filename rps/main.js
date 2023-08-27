const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');


rockButton.addEventListener('click', handleClick);
paperButton.addEventListener('click', handleClick);
scissorsButton.addEventListener('click', handleClick);


function handleClick(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice,computerChoice)
    console.log(roundResult)
}


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function playRound(playerSelection, computerChoice) {
    let win = false;
    if (playerSelection.toLowerCase() === computerChoice.toLowerCase()) {
        return "It's a tie";
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
}

