// Rock - Paper - Scissor Game Simulation




let playerScore = 0;
let computerScore = 0;
let numberOfGames = 0;

let resetGameScore = function() {
playerScore = 0;
computerScore = 0;
numberOfGames = 0;
};


//function of random choose of computer
let computerPlay = function(n) { 
    n = Math.floor( Math.random() * 3 + 1 );
    if (n==1) {
        n = "rock";
    } else if (n==2) {
        n = "paper";
    } else {
        n = "scissors";
    }
    return n;
};


let singleRound = function (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You lost! Paper beats the Rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You win! Rock beats the Scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You win! Paper beats the Rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You lost! Scissors beats the Paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You lost! Rock beats the Scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You win! Scissors beats the Paper!";
    } else if (playerSelection == computerSelection) {
        return "It's tie";
    }
};

 
for (i=5; i > numberOfGames; numberOfGames++) {

playerSelection = prompt("Your choose: Rock? Paper? Scissors?").toLowerCase();
let computerSelection = computerPlay();

console.log('Game: ', `${numberOfGames+1}/5`);
console.log('Your choose: ', playerSelection);
console.log('Computer choose: ', computerSelection);
console.log('Verdict: ', singleRound(playerSelection, computerSelection));
console.log('Your score: ', playerScore);
console.log('Computer score: ',computerScore);
console.log('________________________');
}