// Rock - Paper - Scissor Game Simulation

let playerScore = 0;
let computerScore = 0;
let numberOfGames = 0;


//function: reseting used variables that count score and number of games.
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


//function: single round of game with returned verdict
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
    

//counting of games (counting of single rounds), game lasts 5 rounds
while (numberOfGames <= 4) {
    
    //Validating if answer for prompted question is correct.
    let playerSelection, valid=false;
    while(!valid) {
	    playerSelection = prompt("Your choice: Rock? Paper? Scissors?").toLowerCase();
	    valid = (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors");
        if (valid == false) {
            alert("You made a typo probably, please choose: Rock or Paper or Scissors");
        } else {}
    }

    let computerSelection = computerPlay();

    //generating console information of game progress
    console.log('Game: ', `${numberOfGames+1}/5`);
    console.log('Your choose: ', playerSelection);
    console.log('Computer choose: ', computerSelection);
    console.log('Verdict: ', singleRound(playerSelection, computerSelection));
    console.log('Your score: ', playerScore);
    console.log('Computer score: ',computerScore);
    console.log('====================');

    numberOfGames++;

    //final result of game after 5 rounds and game starts again
    if (numberOfGames > 4 ) {
        if (playerScore == computerScore) {
            console.log('Final Verdict: Tie!');
        } else if (playerScore > computerScore) {
            console.log('Final Verdict: You won!');
        } else {
            console.log('Final Verdict: You loose!');
        }
        
        resetGameScore();
        console.log('========= NEXT GAME =========');
    }
}