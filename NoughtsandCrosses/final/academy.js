let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

let noughtsTurn = true
console.log("Noughts Turn")

function takeTurn(row, column) {
  console.log(board)
  if (board[row][column] === null && noughtsTurn === true) {
    board[row][column] = "nought"
    noughtsTurn = false
    console.log("Crosses Turn")
  } else if (board[row][column] === null && noughtsTurn === false) {
    board[row][column] = "cross"
    noughtsTurn = true
  } else { 
    console.log("space already chosen") 
  }
  console.log("takeTurn was called with row: " + row + ", column:" + column)
}

function checkWinner() {
  console.log("checkWinner was called")
  //Horizontal wins
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
      var checkWinner = (
        board[rowIndex][0] === "nought" && 
        board[rowIndex][1] === "nought" && 
        board[rowIndex][2] === "nought") ? 
        "Noughts wins" : "Noughts doesn't win"
        if (checkWinner === "Noughts wins") {
          return "Noughts"
        }
      var checkWinner = (
        board[rowIndex][0] === "cross" && 
        board[rowIndex][1] === "cross" && 
        board[rowIndex][2] === "cross") ? 
        "Crosses wins" : "Crosses doesn't win"  
        if (checkWinner === "Crosses wins") {
          return "Crosses"
        }
      }
  //Vertical wins
  for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
      var checkWinner = (
        board[0][columnIndex] === "nought" && 
        board[1][columnIndex] === "nought" && 
        board[2][columnIndex] === "nought") ? 
        "Noughts wins" : "Noughts doesn't win"
        if (checkWinner === "Noughts wins") {
          return "Noughts"
      }
      var checkWinner = (
        board[0][columnIndex] === "cross" && 
        board[1][columnIndex] === "cross" && 
        board[2][columnIndex] === "cross") ? 
        "Crosses wins" : "Crosses doesn't win";    
        if (checkWinner === "Crosses wins") {
          return "Crosses"
      }
    }
  //Diagonal wins
  var checkWinner = (
    board[0][0] === "nought" && 
    board[1][1] === "nought" && 
    board[2][2] === "nought") ? 
    "Noughts wins" : "Noughts doesn't win"
    if (checkWinner === "Noughts wins") {
      return "Noughts"
  }
  var checkWinner = (
    board[0][2] === "nought" && 
    board[1][1] === "nought" && 
    board[2][0] === "nought") ? 
    "Noughts wins" : "Noughts doesn't win"
    if (checkWinner === "Noughts wins") {
      return "Noughts"
  }
  var checkWinner = (
    board[0][0] === "cross" && 
    board[1][1] === "cross" && 
    board[2][2] === "cross") ? 
    "Crosses wins" : "Crosses doesn't win"
    if (checkWinner === "Crosses wins") {
      return "Crosses"
    }
  var checkWinner = (
    board[0][2] === "cross" && 
    board[1][1] === "cross" && 
    board[2][0] === "cross") ? 
    "Crosses wins" : "Crosses doesn't win"
    if (checkWinner === "Crosses wins") {
      return "Crosses"
    }
  //Nobody wins
  if (board[0][0] !== null && 
      board[0][1] !== null && 
      board[0][2] !== null && 
      board[1][0] !== null && 
      board[1][1] !== null && 
      board[1][2] !== null && 
      board[2][0] !== null && 
      board[2][1] !== null && 
      board[2][2] !== null) {
    return "Nobody"
  }
}

function resetGame() {
  console.log("resetGame was called")
  board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  noughtsTurn = true
  console.log("Noughts Turn")
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
