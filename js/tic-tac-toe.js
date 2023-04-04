//Plan

/*

Add event listeners to the game board squares to handle clicks by the players.
Create a function to update the game state based on player input.
Write a function to check for a win condition, and update the game state accordingly.
Create a function to switch players after each move.
Add code to handle the end of the game, either by a win or a draw.
Implement a reset button to start a new game.


*/

//Declaring a new variable for the current player

let currentPlayer = 'player1';

//Declaring a new variable for player 1

const player1 = '😼';

//Declaring a new variable for player 2

const player2 = '🐶';

//Declaring a new variable for the board

const board = [ ['_', '_', '_'],['_', '_', '_'],['_', '_', '_'] ];

//Creating an object by initialising each square to an underscore, meaning that it is initially empty. 

const squares = {
    'square1-1': '_',
    'square1-2': '_',
    'square1-3': '_',
    'square2-1': '_',
    'square2-2': '_',
    'square2-3': '_',
    'square3-1': '_',
    'square3-2': '_',
    'square3-3': '_',
};

//Adding a 'click' event listener to each element with the class 'square' and renders the following code.

$('.square').click(function () {
    const squareId = $(this).attr('id');
    const row = parseInt((squareId[6]) -1);
    const col = parseInt((squareId[8]) - 1);
    let currentPlayerSymbol;
    if (currentPlayer === player1) {
        currentPlayerSymbol = player1;
    } else {
        currentPlayerSymbol = player2;
    }
});
