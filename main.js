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

console.log(computerMove())

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

alert(result)

