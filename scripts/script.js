console.log("Hello");

let computerSelection = computerPlay();

console.log(computerSelection);

function computerPlay() {
    rand = Math.floor(Math.random() * 3) + 1;
    return rand;
}