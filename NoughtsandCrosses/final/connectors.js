
const functions = ["takeTurn", "getBoard", "checkWinner", "resetGame"]
for (f of functions) {
    const functionObject = window[f]
    if (typeof functionObject !== "function") {
        throw `Looks like expected function '${f}' is missing. Double check the function signatures from academy.js are still present and unaltered.`
    }
}

function clearBoard() {
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML = ""
        }
    }
}

const submitButton = document.getElementById("submit")

function disableTextInput() {
    document.getElementById("noughts-player").disabled = true
    document.getElementById("crosses-player").disabled = true
}

submitButton.addEventListener("click", disableTextInput)

function drawBoard(board) {
    clearBoard();
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            const cellText = board[rowIndex][columnIndex] === "nought" ? "⊘" : "✗";
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerText = cellText;
        }
    }
}
// 🔘✖️❍✘✗❌⭕⚪🟣◌∅〇⊚❂⊛⊘✗
//https://www.i2symbol.com/symbols/circle

function isValidRowOrColumn(array) {
    return Array.isArray(array) && array.length === 3
}

function isValidColumn(columnArray) {
    return isValidRowOrColumn(columnArray) && columnArray.every(function (item) { return ["nought", "cross", null].includes(item) })
}

function positionClick(rowIndex, columnIndex, event) {
    takeTurn(rowIndex, columnIndex)
    const board = getBoard()
    if (!isValidRowOrColumn(board) || !board.every(isValidColumn)) {
        throw "Expecting 'getBoard' to return a 2d array where all values match are null or one of the strings 'nought' or 'cross'. Actually received: " + JSON.stringify(board)
    }

    drawBoard(board)
    const winner = checkWinner()

    if (winner) {
        if (typeof winner !== "string" || !["Noughts", "Crosses", "Nobody"].includes(winner)) {
            throw "Expecting 'checkWinner' to return null or one of the strings 'noughts', 'crosses' or 'nobody'. Actually received: " + winner
        }
        const winnerName = document.getElementById("winner-name")
        winnerName.innerText = winner

        const noughtsPlayer = document.getElementById("noughts-player").value
        const noughtsWinnerName = document.getElementById("noughts-player").value === "" ? "Noughts" : noughtsPlayer

        const crossesPlayer = document.getElementById("crosses-player").value
        const crossesWinnerName = document.getElementById("crosses-player").value === "" ? "Crosses" : crossesPlayer

        if (winner === "Noughts") {
            document.getElementById("winner-name").innerText = noughtsWinnerName
            gameOver = true
        }
        else if (winner === "Crosses") {
            document.getElementById("winner-name").innerText = crossesWinnerName
            gameOver = true
        }
        else {
            document.getElementById("winner-name").innerText = "Nobody"
            gameOver = true
        }

        const winnerDisplay = document.getElementById("winner-display");
        winnerDisplay.style.display = "block";
    }
}

function resetClick(event) {
    resetGame()
    const winnerName = document.getElementById("winner-name")
    winnerName.innerText = ""
    const winnerDisplay = document.getElementById("winner-display")
    winnerDisplay.style.display = "None"
    clearBoard()
    const noughtsName = document.getElementById("noughts-player")
    noughtsName.value = ""
    const crossesName = document.getElementById("crosses-player")
    crossesName.value = ""
    document.getElementById("noughts-player").disabled = false
    document.getElementById("crosses-player").disabled = false
}

for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
        const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`)
        gridPosition.addEventListener("click", positionClick.bind(null, rowIndex, columnIndex))
    }
}

const resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", resetClick)

if (typeof exports === 'object') {
    console.log("Running in Node")
    module.exports = {
        clearBoard,
        drawBoard,
        isValidRowOrColumn,
        isValidColumn,
        positionClick,
        resetClick,
    }
} else {
    console.log("Running in Browser")
}
