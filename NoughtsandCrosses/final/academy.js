let board = [[null, null, null],
[null, null, null],
[null, null, null]]
function getNewBoard() {
  return [[null, null, null], [null, null, null], [null, null, null]]
}

let noughtsTurn = true
console.log("Noughts Turn")
let gameOver = false

function takeTurn(row, column) {
  console.log(board)
  const currentSquare = board[row][column]

  if (board[row][column] === null && noughtsTurn === true) {
    //console.log("Noughts Turn")
    board[row][column] = "nought"
    noughtsTurn = false
    //  console.log(board)
    console.log("Crosses Turn")
  } else if (board[row][column] === null && noughtsTurn === false) {
    board[row][column] = "cross"
    noughtsTurn = true
  } else { console.log("space already chosen") }

  console.log("takeTurn was called with row: " + row + ", column:" + column)
}

function checkWinner() {
  console.log("checkWinner was called")

  //Horizontal wins

  var checkWinner = (board[0][0] === "nought" && board[0][1] === "nought" && board[0][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Noughts wins") {
    return "Noughts"
  }

  var checkWinner = (board[1][0] === "nought" && board[1][1] === "nought" && board[1][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Noughts wins") {
    return "Noughts"
  }

  var checkWinner = (board[2][0] === "nought" && board[2][1] === "nought" && board[2][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Noughts wins") {
    return "Noughts"
  }

  var checkWinner = (board[0][0] === "cross" && board[0][1] === "cross" && board[0][2] === "cross") ? "Crosses wins" : "Crosses doesn't win";
  //   console.log(checkWinner)
  if (checkWinner === "Crosses wins") {
    return "Crosses"
  }

  var checkWinner = (board[1][0] === "cross" && board[1][1] === "cross" && board[1][2] === "cross") ? "Crosses wins" : "Crosses doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Crosses wins") {
    return "Crosses"
  }

  var checkWinner = (board[2][0] === "cross" && board[2][1] === "cross" && board[2][2] === "cross") ? "Crosses wins" : "Crosses doesn't win";
  //   console.log(checkWinner)  
  if (checkWinner === "Crosses wins") {
    return "Crosses"
  }

  //Vertical wins

  var checkWinner = (board[0][0] === "nought" && board[1][0] === "nought" && board[2][0] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Noughts wins") {
    return "Noughts"
  }

  var checkWinner = (board[0][1] === "nought" && board[1][1] === "nought" && board[2][1] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Noughts wins") {
    return "Noughts"
  }

  var checkWinner = (board[0][2] === "nought" && board[1][2] === "nought" && board[2][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Noughts wins") {
    return "Noughts"
  }

  var checkWinner = (board[0][0] === "cross" && board[1][0] === "cross" && board[2][0] === "cross") ? "Crosses wins" : "Crosses doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Crosses wins") {
    return "Crosses"
  }

  var checkWinner = (board[0][1] === "cross" && board[1][1] === "cross" && board[2][1] === "cross") ? "Crosses wins" : "Crosses doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Crosses wins") {
    return "Crosses"
  }

  var checkWinner = (board[0][2] === "cross" && board[1][2] === "cross" && board[2][2] === "cross") ? "Crosses wins" : "Crosses doesn't win";
  //   console.log(checkWinner)  
  if (checkWinner === "Crosses wins") {
    return "Crosses"
  }

  //Diagonal wins

  var checkWinner = (board[0][0] === "nought" && board[1][1] === "nought" && board[2][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Noughts wins") {
    return "Noughts"
  }

  var checkWinner = (board[0][2] === "nought" && board[1][1] === "nought" && board[2][0] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Noughts wins") {
    return "Noughts"
  }

  var checkWinner = (board[0][0] === "nought" && board[1][1] === "nought" && board[2][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
  if (checkWinner === "Crosses wins") {
    return "Crosses"
  }

  var checkWinner = (board[0][2] === "nought" && board[1][1] === "nought" && board[2][0] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  // console.log(checkWinner)
  if (checkWinner === "Crosses wins") {
    return "Crosses"
  }

  if (board[0][0] !== null & board[0][1] !== null & board[0][2] !== null & board[1][0] !== null & board[1][1] !== null & board[1][2] !== null & board[2][0] !== null & board[2][1] !== null & board[2][2] !== null) {
    return "Nobody"
  }
}

function resetGame() {
  console.log("resetGame was called")
  board = [[null, null, null],
  [null, null, null],
  [null, null, null]]
  noughtsTurn = true
  gameOver = false
}

function getBoard() {
  console.log("getBoard was called")
  return board
}

if (typeof exports === 'object') {
  console.log("Running in Node")
  module.exports = {
    takeTurn,
    checkWinner,
    resetGame,
    getBoard,
  }
} else {
  console.log("Running in Browser")
}
