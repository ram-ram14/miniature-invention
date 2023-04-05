$(document).ready(function() {
    //Declaring a new variable for the current player

    let currentPlayer = 'player1';

    //Declaring a new variable for player 1

    const player1 = '😼';

    //Declaring a new variable for player 2

    const player2 = '🐶';

    //Declaring a new variable for the board

    const board = [ 
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_'] 
    ];

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

    //Function to check if the current player has won the round. 

    const checkWin = function(player) {
        //Determining if a player has selected 3 diagonally
        if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) || (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
            return true;
        }

        //Check win through rows and columns
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player || board[0][i] === player && board[1][i] === player && board[2][i] === player) {
                return true;
            }
        }

        // If none of the above conditions are true, then no win
        return false;
    }

    //Adding a 'click' event listener to each element with the class 'square' which renders the following code.

    $('.square').click(function () {
        const squareId = $(this).attr('id');
        const row = parseInt((squareId[6]) -1);
        const col = parseInt((squareId[8]) - 1);

        //Update the display of the board to reflect the player's selection with their own marker. 

        //Update the board with the player's marker

        //Check if the current player has won
        
    });

    //Adding a function to switch turns after each player makes their move

    const switchPlayer = function() {
        if (currentPlayer === 'player1') {
            currentPlayer = 'player2';
        } else {
            currentPlayer = 'player1';
        }
    }
    switchPlayer();
})

