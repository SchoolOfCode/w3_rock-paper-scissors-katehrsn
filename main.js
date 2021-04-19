let play = true;

let score = 0

let gamesPlayed = 0

let gamesLost = 0
let gamesDraw = 0
let gamesWon = 0

while(play === true) {

let randomNumber = Math.floor((Math.random() * 3) + 1);

function computerMove() {
    if (randomNumber === 1) {
        return "rock" ; 
    }
    else if (randomNumber === 2) {
        return "paper" ;
    }
    else if (randomNumber === 3) {
        return "scissors" ;
    }
}

console.log(computerMove());

let userInput = prompt("rock, paper, or scissors?");

function getWinner (player1, player2) {
 if (player1 === "rock") {
    if (player2 === "rock") {
        return 0 ;
    }
    else if (player2 === "paper") {
        return -1 ;
    }
    else if (player2 === "scissors") {
        return 1 ;
    }
 }
 else if (player1 === "paper") {
    if (player2 === "rock") {
        return 1 ;
    }
    else if (player2 === "paper") {
        return 0 ;
    }
    else if (player2 === "scissors") {
        return -1 ;
    }
 }
 else if (player1 === "scissors") {
    if (player2 === "rock") {
        return -1 ;
    }  
    else if (player2 === "paper") {
        return 1 ;
    }
    else if (player2 === "scissors") {
        return 0 ;
    }
 }
}

let result = getWinner(userInput, computerMove());

score = score + result

gamesPlayed = gamesPlayed + 1

if (result === 1) {
    gamesWon = gamesWon + 1
}
else if (result === 0) {
    gamesDraw = gamesDraw + 1
}
else if (result === -1) {
    gamesLost = gamesLost + 1
}


alert(`your score is ${score}, you have played ${gamesPlayed} games, you have won ${gamesWon} games, draw ${gamesDraw} games, and lost ${gamesLost} games`)

let playAgain = confirm("Do you want to play again?");
    if (playAgain === true) {
        play = true;
    }
    else {
        play = false;
    }
}