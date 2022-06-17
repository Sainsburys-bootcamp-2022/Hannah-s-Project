let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
]

let redsTurn = true
console.log("Red's Turn")
let winnerStatus = false
console.log("no winner")

function takeTurn(row, column) {
    if (winnerStatus === true) {
        return
    }
    for (let row = 5; row >= 0; row--) {
        if (board[row][column] === null && redsTurn === true) {
            board[row][column] = "red"
            redsTurn = false
            console.log(board)
            console.log("Yellow's Turn")
            document.getElementById("whose-turn").innerText = "🟡"
            break
        } else if (board[row][column] === null && redsTurn === false) {
            board[row][column] = "yellow"
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
    for (let row = 5; row >= 0; row--) {
        for (let column = 0; column < 4; column++) {
            if (board[row][column] === "red" && 
                board[row][column + 1] === "red" && 
                board[row][column + 2] === "red" && 
                board[row][column + 3] === "red") {
                console.log("red wins")
                winnerStatus = true
                return "🔴"
            }
            else if (board[row][column] === "yellow" && 
                     board[row][column + 1] === "yellow" && 
                     board[row][column + 2] === "yellow" && 
                     board[row][column + 3] === "yellow") {
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
    for (let column = 41; column >= 21; column--) {
        if (boardCopy[column] === "red" && 
            boardCopy[column - 7] === "red" && 
            boardCopy[column - 14] === "red" && 
            boardCopy[column - 21] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[column] === "yellow" && 
                 boardCopy[column - 7] === "yellow" && 
                 boardCopy[column - 14] === "yellow" && 
                 boardCopy[column - 21] === "yellow") {
                console.log("yellow wins")
                winnerStatus = true
                return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    //Diagonal wins L->R
    for (let column = 38; column >= 35; column--) {
        if (boardCopy[column] === "red" && 
            boardCopy[column - 6] === "red" && 
            boardCopy[column - 12] === "red" && 
            boardCopy[column - 18] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[column] === "yellow" && 
                 boardCopy[column - 6] === "yellow" && 
                 boardCopy[column - 12] === "yellow" && 
                 boardCopy[column - 18] === "yellow") {
                console.log("yellow wins")
                winnerStatus = true
                return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    for (let column = 31; column >= 28; column--) {
        if (boardCopy[column] === "red" && 
            boardCopy[column - 6] === "red" && 
            boardCopy[column - 12] === "red" && 
            boardCopy[column - 18] === "red") {
            console.log("red wins")
            return "🔴"
        }
        else if (boardCopy[column] === "yellow" && 
                 boardCopy[column - 6] === "yellow" && 
                 boardCopy[column - 12] === "yellow" && 
                 boardCopy[column - 18] === "yellow") {
                console.log("yellow wins")
                return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    for (let column = 24; column >= 21; column--) {
        if (boardCopy[column] === "red" && 
            boardCopy[column - 6] === "red" && 
            boardCopy[column - 12] === "red" && 
            boardCopy[column - 18] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[column] === "yellow" && 
                 boardCopy[column - 6] === "yellow" && 
                 boardCopy[column - 12] === "yellow" && 
                 boardCopy[column - 18] === "yellow") {
                console.log("yellow wins")
                winnerStatus = true
                return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    //Diagonal wins R->L
    for (let column = 41; column >= 38; column--) {
        if (boardCopy[column] === "red" && 
            boardCopy[column - 8] === "red" && 
            boardCopy[column - 16] === "red" && 
            boardCopy[column - 24] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[column] === "yellow" && 
                 boardCopy[column - 8] === "yellow" && 
                 boardCopy[column - 16] === "yellow" && 
                 boardCopy[column - 24] === "yellow") {
                console.log("yellow wins")
                winnerStatus = true
                return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    for (let column = 34; column >= 31; column--) {
        if (boardCopy[column] === "red" && 
            boardCopy[column - 8] === "red" && 
            boardCopy[column - 16] === "red" && 
            boardCopy[column - 24] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[column] === "yellow" && 
                 boardCopy[column - 8] === "yellow" && 
                 boardCopy[column - 16] === "yellow" && 
                 boardCopy[column - 24] === "yellow") {
                console.log("yellow wins")
                winnerStatus = true
                return "🟡"
        }
        else {
            console.log("no vertical winner")
        }
    }

    for (let column = 27; column >= 24; column--) {
        if (boardCopy[column] === "red" && 
            boardCopy[column - 8] === "red" && 
            boardCopy[column - 16] === "red" && 
            boardCopy[column - 24] === "red") {
            console.log("red wins")
            winnerStatus = true
            return "🔴"
        }
        else if (boardCopy[column] === "yellow" && 
                 boardCopy[column - 8] === "yellow" && 
                 boardCopy[column - 16] === "yellow" && 
                 boardCopy[column - 24] === "yellow") {
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
    board = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]
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
