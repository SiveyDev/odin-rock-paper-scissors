let playerScore = 0;
let computerScore = 0;
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const winner = document.querySelector('#winner');

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', playRound));
const result = document.querySelector('#result');


function playRound(e) {
    let computerSelection = computerPlay();
    let btnSelect = document.querySelector(`button[id="${e.target.id}"]`);
    let playerSelection = btnSelect.id;
    
    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection == "rock") {
            if (computerSelection == "rock") {
                result.textContent = "Tie! No one wins";
            }
            if (computerSelection == "paper") {
                result.textContent = "You Lose! Paper beats rock";
                computerScore += 1;
            }
            if (computerSelection == "scissors") {
                result.textContent = "You Win! Rock beats scissors";
                playerScore += 1;
            }
        }
        if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                result.textContent = "You Win! Paper beats rock";
                playerScore += 1;
            }
            if (computerSelection == "paper") {
                result.textContent = "Tie! No one wins";
            }
            if (computerSelection == "scissors") {
                result.textContent = "You Lose! Scissors beats paper";
                computerScore += 1;
            }
        }
        if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                result.textContent = "You Lose! Rock beats scissors";
                computerScore += 1;
            }
            if (computerSelection == "paper") {
                result.textContent = "You Win! Scissors beats paper";
                playerScore += 1;
            }
            if (computerSelection == "scissors") {
                result.textContent = "Tie! No one wins";
            }
        }
    }

    
    pScore.textContent = `Player Score: ${playerScore}`;
    cScore.textContent = `Computer Score: ${computerScore}`;

    if (playerScore == 5) {
        winner.textContent = "Player Wins!";
    } else if (computerScore == 5) {
        winnter.textContent = "Computer Wins!";
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