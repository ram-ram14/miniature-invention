//Plan

/*

Create a loop that will continue until either a player has won or the board is full.

Inside the loop, determine which player's turn it is (either X or O).

Ask the current player to choose a row and column on the board to place their symbol (either X or O).

Check if the chosen position on the board is empty. If it is not empty, ask the player to choose a different position.

If the position is empty, update the board with the player's symbol in the chosen row and column.

Check if the player has won the game by having three of their symbols in a row horizontally, vertically, or diagonally.

If the player has won, display a message announcing their victory and end the loop.

If the board is full and no player has won, display a message announcing a tie game and end the loop.

If neither player has won and the board is not full, switch to the other player's turn and continue the loop.

Once the loop has ended (because a player has won or the board is full), ask the players if they want to play again. If they do, start a new game with an empty board. If they do not, end the program.

*/

//Initialising the board with nested arrays where each square on the board represents a spot on the 3x3 grid. 

const board = [ ['_', '_', '_'],['_', '_', '_']['_', '_', '_'] ];
