/*

Your app must:
    Render a game board in the browser
    Switch turns between X and O (or whichever markers you select)
    Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
    Include separate HTML / CSS / JavaScript files
    Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
    Use Javascript for DOM manipulation
    Deploy your game online, where the rest of the world can access it
    Use semantic markup for HTML and CSS (adhere to best practices)

Necessary Deliverables
    A working game, built by you, hosted somewhere on the internet
    A link to your hosted working game in the URL section of your Github repo
    A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
    A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
*/

//Plan

/*

Initialize the game board with an array of arrays, where each inner array represents a row of the board and contains three blank spaces (represented by underscores).

Display the initial board to the players.

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