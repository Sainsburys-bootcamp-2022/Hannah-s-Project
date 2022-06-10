
const functions = ["takeTurn", "getBoard", "checkWinner", "resetGame"]

document.getElementById("whose-turn").innerText = "🔴"

function clearBoard() {
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML = ""
        }
    }
}

const submitButton = document.getElementById("submit")

function disableTextInput() {
    document.getElementById("red-player").disabled = true
    document.getElementById("yellow-player").disabled = true
}

submitButton.addEventListener("click", disableTextInput)

function drawBoard(board) {
    clearBoard();
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            const cellText = board[rowIndex][columnIndex] === "red" ? "🔴" : "🟡";
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerText = cellText;
        }
    }
}

function positionClick(rowIndex, columnIndex, event) {
    takeTurn(rowIndex, columnIndex)
    const board = getBoard()

    drawBoard(board);
    const winner = checkWinner(board)
    if (winner) {
        if (typeof winner !== "string" || !["🔴", "🟡", "Nobody"].includes(winner)) {
            throw "Expecting 'checkWinner' to return null or one of the strings 'red', 'yellow' or 'nobody'. Actually received: " + winner;
        }
        const winnerName = document.getElementById("winner-name")
        winnerName.innerText = winner;

        const redPlayer = document.getElementById("red-player").value
        const redWinnerName = document.getElementById("red-player").value === "" ? "🔴" : redPlayer

        const yellowPlayer = document.getElementById("yellow-player").value
        const yellowWinnerName = document.getElementById("yellow-player").value === "" ? "🟡" : yellowPlayer

        if (winner === "🔴") {
            document.getElementById("winner-name").innerText = redWinnerName
        }
        else if (winner === "🟡") {
            document.getElementById("winner-name").innerText = yellowWinnerName
        }
        else {
            document.getElementById("winner-name").innerText = "Nobody"
        }

        const winnerDisplay = document.getElementById("winner-display");
        winnerDisplay.style.display = "block"
        document.getElementById("show-whose-turn").style.display = "none"
    }
}

function resetClick(event) {
    resetGame()
    const winnerName = document.getElementById("winner-name")
    winnerName.innerText = ""
    const winnerDisplay = document.getElementById("winner-display")
    winnerDisplay.style.display = "None"
    document.getElementById("show-whose-turn").style.display = "block"
    clearBoard()

    const redName = document.getElementById("red-player")
    redName.value = ""
    const yellowName = document.getElementById("yellow-player")
    yellowName.value = ""
    document.getElementById('red-player').disabled = false
    document.getElementById('yellow-player').disabled = false
}

for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
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
        positionClick,
        resetClick,
    }
} else {
    console.log("Running in Browser")
}
