
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

function positionClick(rowIndex, columnIndex) {
    takeTurn(rowIndex, columnIndex)
    const board = getBoard()
    drawBoard(board)
    const winner = checkWinner()
    if (winner) {
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

function resetClick() {
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
        disableTextInput,
        drawBoard,
        isValidRowOrColumn,
        positionClick,
        resetClick,
    }
} else {
    console.log("Running in Browser")
}
