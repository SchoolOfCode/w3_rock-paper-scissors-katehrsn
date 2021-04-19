// let playerMove = "rock";
// let computerMove = "scissors";

// player: rock + computer: rock
// player: rock + computer: paper
// player: rock + computer: scissors

// player: paper + computer: rock
// player: paper + computer: paper
// player: paper + computer: scissors

// player: scissors + computer: rock
// player: scissors + computer: paper
// player: scissors + computer: scissors


let userInput = prompt("rock, paper, or scissors?")

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

let result = getWinner(userInput, "rock");

alert(result)