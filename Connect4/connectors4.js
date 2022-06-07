
// Validate academite functions are available
const functions = ["takeTurn", "getBoard", "checkWinner", "resetGame"];

// Clear down the elements drawn on the board.
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

// Populate the grid with images based on the board state.
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

// function isValidRowOrColumn(array) {
//     return Array.isArray(array) && array.length === 6;
// }

// function isValidColumn(columnArray) {
//     return isValidRowOrColumn(columnArray) && columnArray.every(function (item) { return ["red", "yellow", null].includes(item); });
// }

// A grid position was clicked call the game's turn function, redraw and then check for a winner.
function positionClick(rowIndex, columnIndex, event) {
    takeTurn(rowIndex, columnIndex);
    const board = getBoard();
    // if (!isValidRowOrColumn(board) || !board.every(isValidColumn)) {
    //     throw "Expecting 'getBoard' to return a 2d array where all values match are null or one of the strings 'nought' or 'cross'. Actually received: " + JSON.stringify(board);
    //}

    drawBoard(board);
    const winner = checkWinner(board);
    if (winner) {
        if (typeof winner !== "string" || !["🔴", "🟡", "Nobody"].includes(winner)) {
            throw "Expecting 'checkWinner' to return null or one of the strings 'red', 'yellow' or 'nobody'. Actually received: " + winner;
        }
        const winnerName = document.getElementById("winner-name");   //document refers to the HTML
        winnerName.innerText = winner;


        const redPlayer = document.getElementById("red-player").value
        const redWinnerName = document.getElementById("red-player").value === "" ? "🔴": redPlayer

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
        winnerDisplay.style.display = "block";
        document.getElementById("show-whose-turn").style.display = "none"
    }
}

// The reset button was clicked, call the game's reset function then reset the DOM.
function resetClick(event) {
    resetGame();
    const winnerName = document.getElementById("winner-name");
    winnerName.innerText = "";
    const winnerDisplay = document.getElementById("winner-display");
    winnerDisplay.style.display = "None";        //hides the element
    document.getElementById("show-whose-turn").style.display = "block"
    clearBoard();

    const redName = document.getElementById("red-player");
    redName.value = "";
    const yellowName = document.getElementById("yellow-player");
    yellowName.value = "";
    document.getElementById('red-player').disabled = false
    document.getElementById('yellow-player').disabled = false

}

// Bind the click events for the grid.
for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`);
        gridPosition.addEventListener("click", positionClick.bind(null, rowIndex, columnIndex));
    }
}




//trying to get it to say a column is full if someone chooses a full column
for (let j = 0; j < 7; j++) {
    if (board[0][j] !== null && winnerStatus === false) {
    console.log("column full")
    const columnFull = document.getElementById("column-full")
    columnFull.style.display = "block"

    columnFull.addEventListener("click")
    }
}








// Bind the click event for the reset button.
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetClick);

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
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


