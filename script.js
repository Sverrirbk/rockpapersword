let playerChoice;
let computerChoice; 
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
var pWins = document.querySelector("#pWins");
var cWins = document.querySelector("#cWins");
var draws = document.querySelector("#draws");
var pMove = document.querySelector("#pMove");
var cMove = document.querySelector("#cMove");

// Computers random move
function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    // debugging console.log(result); 
    if (result == 0){
        move = "rock";
    }
    else if (result == 1) {
        move = "paper";
    }
    else {
        move = "sword";
    }
    // debugging console.log(move);
    return move;
}


// Button press
function buttonPress(e){
    if (e.id == "rock" || e.id == "paper" || e.id == "sword") {
        console.log("You have clicked button id = " + e.id + "");
        playerChoice = e.id;
        console.log(playerChoice);
        game(playerChoice);
        
        
    }
    // Reset button
    else {
        let playerScore = 0;
        let computerScore = 0;
        let drawScore = 0;
        draws.innerHTML = drawScore;
        pWins.innerHTML = playerScore;
        cWins.innerHTML = computerScore;
    }
}

// Play a round
function game(playerChoice) { 
     
        compMove = computerPlay();
        playerMove = playerChoice;
        let round = (RockPaperSword(playerMove, compMove));

        updateMoves(compMove, playerMove)
        if (round == "draw") {
            console.log("It was a draw");
        }

        else if (round == "win") {
            console.log("Player wins!")
        }

        else if (round == "loss") {
            console.log("Computer wins")
        }
        
        else {
            console.log("ERROR")
        }
        updateScore(round); 
}

// Get results
function RockPaperSword(player, computer) {
    console.log(player);
    console.log(computer);
    let pWins;
    let cWins;
    let draws;
    if (player == "rock") {
        if (computer =="rock") {
            console.log("Draw!");
            return "draw";
        }
        else if (computer == "paper") {
            console.log("You lose! Paper beats rock");
            return "loss";
        }
        else {
            console.log("You win! Rock beats sword");
            return "win";
        }
    }

    else if (player == "paper") {
        if (computer == "rock") {
            console.log("You win! Paper beats rock");
            return "win"
        }
        else if (computer == "paper") {
            console.log("Draw!");
            return "draw";
        }
        else {
            console.log("You lose! sword beat paper");
            return "loss";
        }
    }

    else if (player == "sword") {
        if (computer == "rock") {
            console.log("You lose! Rock beats sword");
            return "loss";
        }
        else if (computer == "paper") {
            console.log("You win! sword beat paper");
            return "win";
        }
        else {
            console.log("Draw!");
            return "draw";
        }
    }
} 

function updateScore(results) {
    if (results == "win"){
        playerScore++;
        pWins.innerHTML = "Player wins " + playerScore;
    }
    else if (results == "loss") {
        computerScore++;
        cWins.innerHTML = "Computer wins " + computerScore;
    }
    else {
        drawScore++;
        draws.innerHTML = "Draws" + drawScore;

    }
}

function updateMoves(computer, player) {
    cMove.innerHTML = "Computer move " + computer;
    pMove.innerHTML = '<a href="${player}.png">link text</a>'; 
}