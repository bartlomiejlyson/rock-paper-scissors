// Rock - Paper - Scissor Game Simulation

let playerScore;
let computerScore;
let numberOfGames;

//function: reseting the score
let resetGameScore = function() {
playerScore = 0;
computerScore = 0;
numberOfGames = 0;
};

//function: random choose of computer
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

//function: single round with returned result
let singleRound = function (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        computerScore++;
        playerScore++;
        return 'There is a Tie';

    } else if ( (playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock"))  {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelection}!`;

    } else if ( (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
};
    
resetGameScore();

while (numberOfGames <= 4) {
    
    playerSelection = prompt("Your choice: Rock? Paper? Scissors?").toLowerCase();
    let computerSelection = computerPlay();

    console.log('Game: ', `${numberOfGames+1}/5`);
    console.log('Your choose: ', playerSelection);
    console.log('Computer choose: ', computerSelection);
    console.log('Verdict: ', singleRound(playerSelection, computerSelection));
    console.log('Your score: ', playerScore);
    console.log('Computer score: ',computerScore);
    console.log('====================');

    numberOfGames++;
    if (numberOfGames > 4 ) {
        resetGameScore();
        console.log('========= NEXT GAME =========');
    }
}