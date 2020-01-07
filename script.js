let gameBoard = [];
let resultLine = document.getElementById("results")
let squares = document.querySelectorAll(".square");
let player1card = document.getElementById("player1");
let player2card = document.getElementById("player2");

//remove mario and test, redirect checkWinner function to gameBoard
let mario = [3];
let test = [3];

//change to pull from squares innerHTML
function defaultFill(){
    for (i=0; i<9; i++) {
        gameBoard.push(squares[i].innerHTML) 
    }
};

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

function checkWinner() {
    let tempArray =  [];
    for (i=0; i < 9; i++) {
      tempArray.push(squares[i].innerHTML);
      ;
    }
    ///player 1 win conditions
    if (tempArray[0] === 'x' && tempArray[1] === 'x' && tempArray[2]==='x') {
        resultLine.innerHTML = 'Game over!  Player 1 wins'
    } else if (tempArray[3] === 'x' && tempArray[4] === 'x' && tempArray[5] ==='x') {
        resultLine.innerHTML = 'Game over!  Player 1 wins'
    } else if (tempArray[6] === 'x' && tempArray[7] === 'x' && tempArray[8] ==='x') {
        resultLine.innerHTML = 'Game over!  Player 1 wins'
    } else if (tempArray[0] === 'x' && tempArray[4] === 'x' && tempArray[8] ==='x') {
        resultLine.innerHTML = 'Game over!  Player 1 wins'
    } else if (tempArray[6] === 'x' && tempArray[4] === 'x' && tempArray[2] ==='x') {
        resultLine.innerHTML = 'Game over!  Player 1 wins'
    } else if (tempArray[0] === 'x' && tempArray[3] === 'x' && tempArray[6] ==='x') {
        resultLine.innerHTML = 'Game over!  Player 1 wins'
    } else if (tempArray[1] === 'x' && tempArray[4] === 'x' && tempArray[7] ==='x') {
        resultLine.innerHTML = 'Game over!  Player 1 wins'
    } else if (tempArray[2] === 'x' && tempArray[5] === 'x' && tempArray[8] ==='x') {
        resultLine.innerHTML = 'Game over!  Player 1 wins' 
    //player 2 win conditions
    }   else if (tempArray[3] === 'o' && tempArray[4] === 'o' && tempArray[5] ==='o') {
        resultLine.innerHTML = 'Game over!  Player 2 wins'
    } else if (tempArray[6] === 'o' && tempArray[7] === 'o' && tempArray[8] ==='o') {
        resultLine.innerHTML = 'Game over!  Player 2 wins'
    } else if (tempArray[0] === 'o' && tempArray[4] === 'o' && tempArray[8] ==='o') {
        resultLine.innerHTML = 'Game over!  Player 2 wins'
    } else if (tempArray[6] === 'o' && tempArray[4] === 'o' && tempArray[2] ==='o') {
        resultLine.innerHTML = 'Game over!  Player 2 wins'
    } else if (tempArray[0] === 'o' && tempArray[3] === 'o' && tempArray[6] ==='o') {
        resultLine.innerHTML = 'Game over!  Player 2 wins'
    } else if (tempArray[1] === 'o' && tempArray[4] === 'o' && tempArray[7] ==='o') {
        resultLine.innerHTML = 'Game over!  Player 2 wins'
    } else if (tempArray[2] === 'o' && tempArray[5] === 'o' && tempArray[8] ==='o') {
        resultLine.innerHTML = 'Game over!  Player 2 wins'}           
    console.log(tempArray)
    };

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
    checkWinner(); 
    }
};

for (i=0; i < 9; i++) {
    squares[i].addEventListener('click', addToken)
}




  