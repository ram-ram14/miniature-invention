    //Declaring a new variable for player 1

    const player1 = '😼';

    //Declaring a new variable for the current player

    let currentPlayer = player1;

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

    //Adding a new variable to check if the game has ended
    let gameEnd = false;

    //Function to check if the current player has won the round. 

    const checkWin = function(player) {
        //Check win through rows and columns
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player || board[0][i] === player && board[1][i] === player && board[2][i] === player) {
                return true;
            }
        }

        //Determining if a player has selected 3 diagonally
        if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) || (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
            return true;
        }

        // If none of the above conditions are true, then no win
        return false;
    }

    //Check if the current player has won the game
    function showWinner() {
        let winner = null;

        // Check for win conditions
        if (checkWin(currentPlayer)) {
            winner = currentPlayer;
        }

        // Check for tie condition
        if (!winner && board.flat().every((square) => square !== '_')) {
            winner = 'tie';
        }

        // Display winner message if there is a winner
        if (winner) {
            if (winner === 'tie') {
                $('#winner-message').text(`It's a tie!`);
            } else {
                $('#winner-message').text(`${winner} wins!`);
            }
            gameEnd = true;
        }
    }


    //Adding a 'click' event listener to each element with the class 'square'

    $('.square').click(function () {
        //A player can only select another square if the game has not ended yet.
        if (!gameEnd) {
            const squareId = $(this).attr('id');
            const [_, row, col] = squareId.split('-').map(Number);

            //Update the squares object with the player's marker
            squares[squareId] = currentPlayer;

            //Update the text content of the clicked square element
            $(this).text(currentPlayer);

            //Update the board array with the player's marker
            board[row - 1][col - 1] = currentPlayer;
            
            //Invoking the showWinner function.
            showWinner();

            //Switching turns after each player makes their move

            if (currentPlayer === player1) {
                currentPlayer = player2;
            } else {
                currentPlayer = player1;
            }
        }
    })
    
    //If a player wins, then a message will appear.
    showWinner();

    //Adding an event listener to the restart button to reset the game
    $('#restart').click(function () {
        //To reset the squares, the game needs to clear the markers from the board. 
        $('.square').text('');

        //Reverting the board and squares to their starting position
        board.forEach(function(row, rowIndex) {
            row.forEach(function(value, colIndex) {
                board[rowIndex][colIndex] = '_';
                squares['square' + (rowIndex+1) + '-' + (colIndex+1)] = '-';
            })
        })

        //Reverting the currentPlayer to player1
        currentPlayer = player1;

        //Remove the winner message
        $('#winner-message').text('');

        //Reset the gameEnd variable
        gameEnd = false;

        //Invoke showWinner() to clear any previous messages
        showWinner();
    });

    //Adding an animated glow effect to the game-board when a player selects a square
    $('.square').on('click', function() {
        $('#game-board').addClass('glow');
    });

    //Once a player wins and the game resets, remove the animated glow effect. 
    $('#restart').on('click', function() {
        $('#game-board').removeClass('glow');
    })

    

    

