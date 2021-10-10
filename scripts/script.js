let computerSelection = computerPlay();

console.log(computerSelection);

function computerPlay() {
    rand = Math.floor(Math.random() * 3) + 1;
    // console.log(rand);
    if (rand == 1) {
        return "rock";
    } else if (rand == 2) {
        return "paper";
    } else {
        return "scissors"
    }
}