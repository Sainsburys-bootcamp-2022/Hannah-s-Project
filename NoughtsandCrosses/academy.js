// Make your changes to store and update game state in this file

let board = [[null, null, null], [null, null, null], [null, null, null]]
function getNewBoard() {
  //  return [[null, null, null], [null, null, null], [null, null, null]]
}

let noughtsTurn = true
console.log(noughtsTurn)

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log(board[row][column])
    const currentSquare = board[row][column]

    if (board[row][column] === null && noughtsTurn === true) {
        console.log("noughtsTurn")
        board[row][column] = "o"
        noughtsTurn = false
    } else if (board[row][column] === null && noughtsTurn === false) {
        board[row][column] = "x"
        console.log("crossesTurn")
    } else
      {console.log("space already chosen")}
       
      console.log("takeTurn was called with row: " + row + ", column:" + column);
      console.log(`takeTurn was called with row: ${row}, column: ${column}`);

      console.log(board) 
    }

   // 

//if current square = null then can move
//now we need an if statement

    




// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called")
    board = getNewBoard();
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() 
{  console.log("getBoard was called");
    return [[null, null, null], [null, null, null], [null, null, null]];
   // if row 0 and column 0, put nought/cross in 0,0 
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
