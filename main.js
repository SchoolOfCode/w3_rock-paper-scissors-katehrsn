// DOM Variables
const newGameButton = document.querySelector("#newGameButton");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");
const tieGames = document.querySelector("#tieGames");

// Game Variables
let computerMove = "n/a";
let playerMove = "n/a";

let playerWins = 0;
let computerWins = 0;
let ties = 0;

let result = "n/a"

// Event Listeners
newGameButton.addEventListener("click", newGame);
rockButton.addEventListener("click", userRock);
paperButton.addEventListener("click", userPaper);
scissorsButton.addEventListener("click", userScissors);

// Functions
function newGame(){
    playerWins = 0
    computerWins = 0
    ties = 0
    playerMove = "n/a"
    computerMove = "n/a"
    result = "n/a"
    userScore.innerText = `user: ${playerWins}`
    computerScore.innerText = `computer: ${computerWins}`
    tieGames.innerText = `ties: ${ties}`

}

function randomNumber(){
    return Math.floor((Math.random() * 3) + 1);
}
function getComputerMove(){
    randomNumber();
    if (randomNumber() === 1) {
        return computerMove = "rock";
    }
    else if (randomNumber() === 2) {
        return computerMove = "paper";
    }
    else if(randomNumber() === 3) {
        return computerMove = "scissors";
    }
}

function getWinner (player1, player2) {
 if (player1 === "rock") {
    if (player2 === "rock") {
        return "tie" ;
    }
    else if (player2 === "paper") {
        return "computer wins" ;
    }
    else if (player2 === "scissors") {
        return "user wins" ;
    }
 }
 else if (player1 === "paper") {
    if (player2 === "rock") {
        return "user wins" ;
    }
    else if (player2 === "paper") {
        return "tie" ;
    }
    else if (player2 === "scissors") {
        return "computer wins" ;
    }
 }
 else if (player1 === "scissors") {
    if (player2 === "rock") {
        return "computer wins" ;
    }  
    else if (player2 === "paper") {
        return "user wins" ;
    }
    else if (player2 === "scissors") {
        return "tie" ;
    }
 }
}

function getScore() {
    if (result === "user wins"){
        playerWins++;
        userScore.innerText = `user: ${playerWins}`
    }
    else if (result === "computer wins"){
        computerWins++;
        computerScore.innerText = `computer: ${computerWins}`
    }
    else if (result === "tie"){
        ties++;
        tieGames.innerText = `ties: ${ties}`
    }
}

function userRock(){
    let computerMove = getComputerMove();
    let playerMove = "rock";
    let winner = getWinner(playerMove, computerMove)
    result = winner
    getScore();
}
function userPaper(){
    let computerMove = getComputerMove();
    let playerMove = "paper";
    let winner = getWinner(playerMove, computerMove)
    result = winner
    getScore();
}
function userScissors(){
    let computerMove = getComputerMove();
    let playerMove = "scissors";
    let winner = getWinner(playerMove, computerMove)
    result = winner
    getScore();
}