let playerMove = "rock";
let computerMove = "scissors";

// player: rock + computer: rock
// player: rock + computer: paper
// player: rock + computer: scissors

// player: paper + computer: rock
// player: paper + computer: paper
// player: paper + computer: scissors

// player: scissors + computer: rock
// player: scissors + computer: paper
// player: scissors + computer: scissors

if (playerMove === "rock") {
    if (computerMove === "rock") {
        console.log ("draw");
    }
    if (computerMove === "paper") {
        console.log ("computer wins");
    }
    if (computerMove === "scissors") {
        console.log ("player wins");
    }
}
if (playerMove === "paper") {
    if (computerMove === "rock") {
        console.log ("player wins")
    }
    if (computerMove === "paper") {
        console.log ("draw")
    }
    if (computerMove === "scissors") {
        console.log ("computer wins")
    }
}
if (playerMove === "scissors") {
    if (computerMove === "rock") {
        console.log ("computer wins")
    }  
    if (computerMove === "paper") {
        console.log ("player wins")
    }
    if (computerMove === "scissors") {
        console.log ("draw")
    }
}
