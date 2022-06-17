
// function displayCounters() {
// let redCounters = ["🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴", "🔴","🔴", "🔴", "🔴", "🔴", "🔴"]
// // if() {
//     redCounters.shift()
// }
    
    
// const redCountersCopy = [...redCounters].flat()
// console.log(redCountersCopy)
// document.getElementById("red-counters").innerText = redCountersCopy
// }


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
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerText = cellText
        }
    }
}

function positionClick(rowIndex, columnIndex) {
    takeTurn(rowIndex, columnIndex)
    const board = getBoard()

    drawBoard(board);
    const winner = checkWinner(board)
    if (winner) {
        const winnerName = document.getElementById("winner-name")
        winnerName.innerText = winner
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
        const winnerDisplay = document.getElementById("winner-display")
        winnerDisplay.style.display = "block"
        document.getElementById("show-whose-turn").style.display = "none"
    }
}

function resetClick() {
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
        disableTextInput,
        drawBoard,
        positionClick,
        resetClick,
    }
} else {
    console.log("Running in Browser")
}
