let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
]

function getNewBoard() {
    return [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
]
}

let redsTurn = true
console.log("Red's Turn")
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
    }
    console.log(`takeTurn was called with row: ${row}, column: ${column}`)
}

function checkWinner(board) {
    console.log("checkWinner was called")

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

function isValidRowOrColumn(array) {
    return Array.isArray(array) && array.length === 6
}

function isValidColumn(columnArray) {
    return isValidRowOrColumn(columnArray) && columnArray.every(function (item) { return ["red", "yellow", null].includes(item) })
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
        isValidRowOrColumn
    }
} else {
    console.log("Running in Browser")
}
