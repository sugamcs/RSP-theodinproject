function game() {
        let computerWins = 0;
        let playerWins = 0;

        for (let round = 0; round < 5; round++) {
            const playerChoice = prompt("What is your choice? ");
            if (!playerChoice) {
                console.log("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
                continue; 
            }

            const computerChoice = getComputerChoice();
            const roundResult = playRound(playerChoice, computerChoice);
            console.log(roundResult);

            if (roundResult.includes("win")) {
                playerWins++;
            } else if (roundResult.includes("lose")) {
                computerWins++;
            }
        }

        if (playerWins > computerWins) {
            console.log("You win the game!");
        } else if (computerWins > playerWins) {
            console.log("Computer wins the game!");
        } else {
            console.log("It's a tie game!");
        }
    }
game();