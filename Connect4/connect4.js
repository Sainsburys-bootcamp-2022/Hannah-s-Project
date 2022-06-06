let board = [[null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],]

function getNewBoard() {
    return [[null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],]
}

let redsTurn = true
console.log("Red's Turn")
document.getElementById("whose-turn").innerText = "🔴"
let winnerStatus = false
console.log("no winner")

function takeTurn(row, column) {
    if (winnerStatus === true) {
        return
    }
    const currentSquare = board[row][column]

    for (let i = 5; i >= 0; i--) {
        if (board[i][column] === null && redsTurn === true) {
            //console.log("Red's Turn")
            board[i][column] = "red"
            redsTurn = false
            console.log(board)
            console.log("Yellow's Turn")
            document.getElementById("whose-turn").innerText = "🟡"
            break
        } else if (board[i][column] === null && redsTurn === false) {
            board[i][column] = "yellow"
            redsTurn = true
            document.getElementById("whose-turn").innerText = "🔴"
            console.log(board)
            break
        } 

        //else { 
        //     document.getElementById("column-filled").innerText = "Choose another column, this one is full!"
        //     console.log("this column is full") } //fix this so it doesn't show every time, should only be when a column is full of counters
    }
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
}

function checkWinner(board) {
    console.log("checkWinner was called")

    //Have got all wins to work, just need to get it to not let the winner change -> got horizontal fixed with break at the end. When I put break at the end of the vertical wins it doesn't show any winners

    //Horizontal wins
    for (let i = 5; i >= 0; i--) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === "red" && board[i][j + 1] === "red" && board[i][j + 2] === "red" && board[i][j + 3] === "red") {
                console.log("red wins")
                winnerStatus = true
                return "🔴"
            }
            else if (board[i][j] === "yellow" && board[i][j + 1] === "yellow" && board[i][j + 2] === "yellow" && board[i][j + 3] === "yellow") {
                console.log("yellow wins")
                winnerStatus = true
                return "🟡"
            }
            else {
                (console.log("no horizontal winner"))
            }
        }
    }

    //         going diagonally only need to add or subtract 6, 3 times 
    //         going horizontally add or subtract 1, 3 times
    //         going vertially add or subtract 7, 3 times

    // look at .flat (make a copy of array first)
    //convert it to integer values?

    // for (i=5; i>=0; i--) {
    //     console.log(boardCopy.slice(i*7, ((i*7)+6)))
    // }
    // board =  [ 0,  1,  2,  3,  4,  5,  6, 
    //            7,  8,  9, 10, 11, 12, 13,
    //           14, 15, 16, 17, 18, 19, 20,
    //           21, 22, 23, 24, 25, 26, 27,
    //           28, 29, 30, 31, 32, 33, 34,
    //           35, 36, 37, 38, 39, 40, 41]

    const boardCopy = [...board].flat()
    console.log(boardCopy)

    //Vertical wins
    for (let j = 41; j >= 21; j--) {
        if (boardCopy[j] === "red" && boardCopy[j - 7] === "red" && boardCopy[j - 14] === "red" && boardCopy[j - 21] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[j] === "yellow" && boardCopy[j - 7] === "yellow" && boardCopy[j - 14] === "yellow" && boardCopy[j - 21] === "yellow") {
            console.log("yellow wins")
            winnerStatus = true
            return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    //Diagonal wins L->R
    for (let j = 38; j >= 35; j--) {
        if (boardCopy[j] === "red" && boardCopy[j - 6] === "red" && boardCopy[j - 12] === "red" && boardCopy[j - 18] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[j] === "yellow" && boardCopy[j - 6] === "yellow" && boardCopy[j - 12] === "yellow" && boardCopy[j - 18] === "yellow") {
            console.log("yellow wins")
            winnerStatus = true
            return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    for (let j = 31; j >= 28; j--) {
        if (boardCopy[j] === "red" && boardCopy[j - 6] === "red" && boardCopy[j - 12] === "red" && boardCopy[j - 18] === "red") {
            console.log("red wins")
            return "🔴"
        }
        else if (boardCopy[j] === "yellow" && boardCopy[j - 6] === "yellow" && boardCopy[j - 12] === "yellow" && boardCopy[j - 18] === "yellow") {
            console.log("yellow wins")
            return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    for (let j = 24; j >= 21; j--) {
        if (boardCopy[j] === "red" && boardCopy[j - 6] === "red" && boardCopy[j - 12] === "red" && boardCopy[j - 18] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[j] === "yellow" && boardCopy[j - 6] === "yellow" && boardCopy[j - 12] === "yellow" && boardCopy[j - 18] === "yellow") {
            console.log("yellow wins")
            winnerStatus = true
            return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    //need to look at diagonal wins because works if some on one 'line' and the rest on another =>  instead of having the range 38-21 for L->R and 41-24 for R->L I had to split it into 3 to exclude the ones that aren't in a row on the board.

    //Diagonal wins R->L
    for (let j = 41; j >= 38; j--) {
        if (boardCopy[j] === "red" && boardCopy[j - 8] === "red" && boardCopy[j - 16] === "red" && boardCopy[j - 24] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[j] === "yellow" && boardCopy[j - 8] === "yellow" && boardCopy[j - 16] === "yellow" && boardCopy[j - 24] === "yellow") {
            console.log("yellow wins")
            winnerStatus = true
            return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    for (let j = 34; j >= 31; j--) {
        if (boardCopy[j] === "red" && boardCopy[j - 8] === "red" && boardCopy[j - 16] === "red" && boardCopy[j - 24] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[j] === "yellow" && boardCopy[j - 8] === "yellow" && boardCopy[j - 16] === "yellow" && boardCopy[j - 24] === "yellow") {
            console.log("yellow wins")
            winnerStatus = true
            return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    for (let j = 27; j >= 24; j--) {
        if (boardCopy[j] === "red" && boardCopy[j - 8] === "red" && boardCopy[j - 16] === "red" && boardCopy[j - 24] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[j] === "yellow" && boardCopy[j - 8] === "yellow" && boardCopy[j - 16] === "yellow" && boardCopy[j - 24] === "yellow") {
            console.log("yellow wins")
            winnerStatus = true
            return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

//Nobody wins
    function noneAreNull(boardCopy) {
        return boardCopy.every(element => element !== null)
    }
    if (noneAreNull(boardCopy) === true) {
        console.log("nobody wins")
        return "Nobody"
    }
}

function resetGame() {
    console.log("resetGame was called")
    board = [[null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]]
    winnerStatus = false
    redsTurn = true
    console.log("Red's Turn")
    document.getElementById("whose-turn").innerText = "🔴"
}

function getBoard() {
    console.log("getBoard was called")
    return board
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
