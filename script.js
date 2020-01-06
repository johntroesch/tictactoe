let gameBoard = [];
let resultLine = document.getElementById("results")
let squares = document.querySelectorAll(".square");
let player1card = document.getElementById("player1");
let player2card = document.getElementById("player2");

//remove mario and test, redirect checkWinner function to gameBoard
let mario = [3];
let test = [3];

//fill gameBoard default
function defaultFill(){
    for (i=0; i<9; i++) {
        gameBoard.push("empty") 
    }
};

//populates board based on Array
defaultFill();


for (i=0; i < squares.length; i++) {
    squares[i].innerHTML = gameBoard[i]
}


const playerFactory = (name, assignment) => {
   return {name, assignment}
}

const playerOne = playerFactory('Player One', 'x');


const playerTwo = playerFactory('Player Two', 'o');

let currentPlayer = playerOne;

function addToken() {
    if (this.innerHTML === 'empty'){
    this.innerHTML=currentPlayer.assignment;
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
        player1card.className = "playerDisplay";
        player2card.className = "currentPlayer";
        console.log('current player is player 2')
    } else if (currentPlayer === playerTwo) {
        currentPlayer = playerOne;
        player2card.className = "playerDisplay";
        player1card.className = "currentPlayer";
        console.log('current player is player 1')
    } else {
        console.log('ERROR!')
    }
    }
};

for (i=0; i < 9; i++) {
    squares[i].addEventListener('click', addToken)
}

/*
function checkWinner() {
    

    }

checkWinner();   */