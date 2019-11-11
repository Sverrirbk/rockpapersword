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
    if (result == 0){
        move = "rock";
    }
    else if (result == 1) {
        move = "paper";
    }
    else {
        move = "sword";
    }
    return move;
}


// Button press
function buttonPress(e){
    if (e.id == "rock" || e.id == "paper" || e.id == "sword") {
        playerChoice = e.id;
        game(playerChoice);
        
        
    }
    // Reset button
    else {
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
        pWins.innerHTML = "Player wins";
        cWins.innerHTML = "Computer wins";
        draws.innerHTML = "Draws";
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("sword").disabled = false;


        var imgs = document.getElementsByTagName("img");
        for(var i=0, l=imgs.length; i<l; i++) {
            imgs[i].src = "question.png";
        }
}
    
}

// Play a round
function game(playerChoice) { 
     
    compMove = computerPlay();
    playerMove = playerChoice;
    let round = (RockPaperSword(playerMove, compMove));

    updateMoves(compMove, playerMove)
    if (round == "draw") {
    }

    else if (round == "win") {
    }

    else if (round == "loss") {
    }
    
    else {
        console.log("ERROR")
    }
    updateScore(round);
    // Check if game is over
    checkWinner(playerScore, computerScore);
}

// Get results
function RockPaperSword(player, computer) {
    console.log(player);
    console.log(computer);
    let pWins;
    let cWins;
    let draws;
    updateChoice(player, computer)
    if (player == "rock") {
        if (computer =="rock") {
            return "draw";
        }
        else if (computer == "paper") {
            return "loss";
        }
        else {
            return "win";
        }
    }

    else if (player == "paper") {
        if (computer == "rock") {
            return "win"
        }
        else if (computer == "paper") {
            return "draw";
        }
        else {
            return "loss";
        }
    }

    else if (player == "sword") {
        if (computer == "rock") {
            return "loss";
        }
        else if (computer == "paper") {
            return "win";
        }
        else {
            return "draw";
        }
    }
} 
function updateChoice(player, computer) {
        
    
    playerPick.innerHTML = "Player picked " + player.toUpperCase();
    document.getElementById("pPick").src = player + ".png"; 
    var playerImg = document.createElement('img')
    playerImg.src = player + ".png";
    document.getElementById('playerPickDiv').appendChild(playerImg);

    computerPick.innerHTML = "Computer picked " + computer.toUpperCase();
    document.getElementById("cPick").src = computer + ".png";
    var compImg = document.createElement('img')
    compImg.src = computer + ".png";
    document.getElementById('computerPickDiv').appendChild(compImg);
}

function updateScore(results) {
    if (results == "win"){
        playerScore++;
        pWins.innerHTML = "Player wins " + playerScore;
        roundResult.innerHTML = "Player wins this round!";
    }
    else if (results == "loss") {
        computerScore++;
        cWins.innerHTML = "Computer wins " + computerScore;
        roundResult.innerHTML = "Computer wins this round!";
    }
    else {
        drawScore++;
        draws.innerHTML = "Draws " + drawScore;
        roundResult.innerHTML = "This round is a draw!";

    }
}

function updateMoves(computer, player) {
    document.getElementById("cMove").src = computer + ".png";
    document.getElementById("pMove").src = player + ".png"; 
}

function checkWinner(playerScore, computerScore) {
    if (playerScore >= 5) {
        disableButtons();
        roundResult.innerHTML = "Player won the game!";
        document.getElementById("pMove").src = "playerWin.png"; 
}
    else if (computerScore >= 5) {
        disableButtons();
        roundResult.innerHTML = "You lost the game!";
        document.getElementById("pMove").src = "computerWin.png";
    }
}

function disableButtons (computerWin, playerWin) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("sword").disabled = true;
}
