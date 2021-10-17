// let computerSelection = computerPlay();
// let playerSelection = prompt("Rock, Paper, Scissors?:");
// playerSelection = playerSelection.toLowerCase();

// console.log(`Computer chose: ${computerSelection}`);
// console.log(`Player chose: ${playerSelection}`);
// console.log(playRound(playerSelection, computerSelection));
// game();

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', playRound));
const result = document.querySelector('#result');

function playRound(e) {
    let computerSelection = computerPlay();
    let btnSelect = document.querySelector(`button[id="${e.target.id}"]`);
    let playerSelection = btnSelect.id;
    console.log("Computer selection is: " + computerSelection);
    console.log("Player selection is: " + playerSelection);
    
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            result.textContent = "Tie! No one wins";
        }
        if (computerSelection == "paper") {
            result.textContent = "You Lose! Paper beats rock";
        }
        if (computerSelection == "scissors") {
            result.textContent = "You Win! Rock beats scissors";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result.textContent = "You Win! Paper beats rock";
        }
        if (computerSelection == "paper") {
            result.textContent = "Tie! No one wins";
        }
        if (computerSelection == "scissors") {
            result.textContent = "You Lose! Scissors beats paper";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result.textContent = "You Lose! Rock beats scissors";
        }
        if (computerSelection == "paper") {
            result.textContent = "You Win! Scissors beats paper";
        }
        if (computerSelection == "scissors") {
            result.textContent = "Tie! No one wins";
        }
    }
}

function computerPlay() {
    rand = Math.floor(Math.random() * 3) + 1;
    
    if (rand == 1) {
        return "rock";
    } else if (rand == 2) {
        return "paper";
    } else {
        return "scissors"
    }
}

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection == "rock") {
//         if (computerSelection == "rock") {
//             return "Tie! No one wins"
//         }
//         if (computerSelection == "paper") {
//             return "You Lose! Paper beats rock"
//         }
//         if (computerSelection == "scissors") {
//             return "You Win! Rock beats scissors"
//         }
//     }
//     if (playerSelection == "paper") {
//         if (computerSelection == "rock") {
//             return "You Win! Paper beats rock"
//         }
//         if (computerSelection == "paper") {
//             return "Tie! No one wins"
//         }
//         if (computerSelection == "scissors") {
//             return "You Lose! Scissors beats paper"
//         }
//     }
//     if (playerSelection == "scissors") {
//         if (computerSelection == "rock") {
//             return "You Lose! Rock beats scissors"
//         }
//         if (computerSelection == "paper") {
//             return "You Win! Scissors beats paper";
//         }
//         if (computerSelection == "scissors") {
//             return "Tie! No one wins";
//         }
//     }
// }

// function game() {
//     let rounds = Number(prompt("How many rounds do you want to play?"));
    
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 1; i <= rounds; i++) {
//         let computerSelection = computerPlay();
//         let playerSelection = prompt("Rock, Paper, Scissors?:");
//         playerSelection = playerSelection.toLowerCase();

//         console.log(`Computer chose: ${computerSelection}`);
//         console.log(`Player chose: ${playerSelection}`);

//         if (playerSelection == "rock") {
//             if (computerSelection == "rock") {
//                 console.log("Tie! No one wins");
//             }
//             if (computerSelection == "paper") {
//                 computerScore += 1;
//                 console.log("You Lose! Paper beats rock");
//             }
//             if (computerSelection == "scissors") {
//                 playerScore += 1;
//                 console.log("You Win! Rock beats scissors");
//             }
//         }
//         if (playerSelection == "paper") {
//             if (computerSelection == "rock") {
//                 playerScore += 1;
//                 console.log("You Win! Paper beats rock");
//             }
//             if (computerSelection == "paper") {
//                 console.log("Tie! No one wins");
//             }
//             if (computerSelection == "scissors") {
//                 computerScore += 1;
//                 console.log("You Lose! Scissors beats paper");
//             }
//         }
//         if (playerSelection == "scissors") {
//             if (computerSelection == "rock") {
//                 computerScore += 1;
//                 console.log("You Lose! Rock beats scissors");
//             }
//             if (computerSelection == "paper") {
//                 playerScore += 1;
//                 console.log("You Win! Scissors beats paper");
//             }
//             if (computerSelection == "scissors") {
//                 console.log("Tie! No one wins");
//             }
//         }
//     }
//     console.log(`your score is: ${playerScore}`);
//     console.log(`Computer score is: ${computerScore}`);
//     if (playerScore > computerScore) {
//         console.log("Congratulations! You win the game!");
//     } else if (computerScore > playerScore) {
//         console.log("You lose the game.");
//     } else {
//         console.log("The game is a tie!");
//     }
// }