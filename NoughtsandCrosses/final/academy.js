// Make your changes to store and update game state in this file

let board = [[null, null, null], 
             [null, null, null], 
             [null, null, null]]
function getNewBoard() {
  return [[null, null, null], [null, null, null], [null, null, null]]
}

let noughtsTurn = true
console.log("Noughts Turn")

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log(board)  //no longer shows null as I removed [row][column]
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
    } else
      {console.log("space already chosen")}
       
      console.log("takeTurn was called with row: " + row + ", column:" + column);
      console.log(`takeTurn was called with row: ${row}, column: ${column}`);

  }

     // console.log(board[row][column]) 
    

//     let icon = 'X'

// const toggle = () => {
//     if ( icon === 'X' ) {
//         icon = 'O';
//         inst.innerHTML = "<p>Nought's turn<p/>";
//     }    
//     else {
//         icon = 'X';
//         inst.innerHTML = "<p>Cross's turn<p/>";
//     }    
// }

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    //return null;
  //  console.log(board[row][column])


  //change this because need nobody as third option
  //draw (no winner) if 9 counters placed, use a counter - each time a play goes add 1 to the counter and when hits 9 becomes nobody
  //or could I do if no square = null && !Noughts wins && !Crosses wins

  //Horizontal wins

     var checkWinner = (board[0][0] === "nought" && board[0][1] === "nought" && board[0][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
        if (checkWinner === "Noughts wins") {
        return "Noughts" }
   
   var checkWinner = (board[1][0] === "nought" && board[1][1] === "nought" && board[1][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
 //  console.log(checkWinner)
        if (checkWinner === "Noughts wins") {
        return "Noughts" }

    var checkWinner = (board[2][0] === "nought" && board[2][1] === "nought" && board[2][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
 //  console.log(checkWinner)
        if (checkWinner === "Noughts wins") {
        return "Noughts" }

    var checkWinner = (board[0][0] === "cross" && board[0][1] === "cross" && board[0][2] === "cross") ? "Crosses wins" : "Crosses doesn't win";
 //   console.log(checkWinner)
        if (checkWinner === "Crosses wins") {
        return "Crosses" }

    var checkWinner = (board[1][0] === "cross" && board[1][1] === "cross" && board[1][2] === "cross") ? "Crosses wins" : "Crosses doesn't win";
  //  console.log(checkWinner)
        if (checkWinner === "Crosses wins") {
        return "Crosses" }

    var checkWinner = (board[2][0] === "cross" && board[2][1] === "cross" && board[2][2] === "cross") ? "Crosses wins" : "Crosses doesn't win";
 //   console.log(checkWinner)  
        if (checkWinner === "Crosses wins") {
        return "Crosses" } 

//Vertical wins

    var checkWinner = (board[0][0] === "nought" && board[1][0] === "nought" && board[2][0] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
        if (checkWinner === "Noughts wins") {
        return "Noughts" }
   
   var checkWinner = (board[0][1] === "nought" && board[1][1] === "nought" && board[2][1] === "nought") ? "Noughts wins" : "Noughts doesn't win";
 //  console.log(checkWinner)
        if (checkWinner === "Noughts wins") {
        return "Noughts" }

    var checkWinner = (board[0][2] === "nought" && board[1][2] === "nought" && board[2][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
 //  console.log(checkWinner)
        if (checkWinner === "Noughts wins") {
        return "Noughts" }

    var checkWinner = (board[0][0] === "cross" && board[1][0] === "cross" && board[2][0] === "cross") ? "Crosses wins" : "Crosses doesn't win";
  //  console.log(checkWinner)
        if (checkWinner === "Crosses wins") {
        return "Crosses" }

    var checkWinner = (board[0][1] === "cross" && board[1][1] === "cross" && board[2][1] === "cross") ? "Crosses wins" : "Crosses doesn't win";
  //  console.log(checkWinner)
        if (checkWinner === "Crosses wins") {
        return "Crosses" }

    var checkWinner = (board[0][2] === "cross" && board[1][2] === "cross" && board[2][2] === "cross") ? "Crosses wins" : "Crosses doesn't win";
 //   console.log(checkWinner)  
        if (checkWinner === "Crosses wins") {
        return "Crosses" } 

//Diagonal wins

    var checkWinner = (board[0][0] === "nought" && board[1][1] === "nought" && board[2][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
        if (checkWinner === "Noughts wins") {
        return "Noughts" }

    var checkWinner = (board[0][2] === "nought" && board[1][1] === "nought" && board[2][0] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
        if (checkWinner === "Noughts wins") {
        return "Noughts" }

    var checkWinner = (board[0][0] === "nought" && board[1][1] === "nought" && board[2][2] === "nought") ? "Noughts wins" : "Noughts doesn't win";
  //  console.log(checkWinner)
        if (checkWinner === "Crosses wins") {
        return "Crosses" }

    var checkWinner = (board[0][2] === "nought" && board[1][1] === "nought" && board[2][0] === "nought") ? "Noughts wins" : "Noughts doesn't win";
   // console.log(checkWinner)
        if (checkWinner === "Crosses wins") {
        return "Crosses" }

  //need if statements to stop it when one wins if I don't want the if statement after each one

  if (board[0][0] !== null & board[0][1] !== null & board[0][2] !== null & board[1][0] !== null & board[1][1] !== null & board[1][2] !== null & board[2][0] !== null & board[2][1] !== null & board[2][2] !== null) {
    return "Nobody"
}
}
//   if (board[0][0] !== null && board[0][1] !== null && board[0][2] !== null && board[1][0] !== null && board[1][1] !== null && board[1][2] !== null && board[2][0] !== null && board[2][1] !== null && board[2][2] !== null && checkWinner !== "Noughts wins" && checkWinner !== "Crosses wins") {
//      return "nobody"
//  }
// This works but lets the winner change except on the very first go only when you refresh using the reset button. When refreshing the page it works every time without changing the winner. When I hit Reset it makes it crosses turn first, this could be why. I had console.log("Noughts turn") outside of the takeTurn function. When I put let noughtsTurn = true at the end of the resetGame function it kept Noughts turn as first when I hit the Reset button and this fixed it


// if (board[0][0] !== null & board[0][1] !== null & board[0][2] !== null & board[1][0] !== null & board[1][1] !== null & board[1][2] !== null & board[2][0] !== null & board[2][1] !== null & board[2][2] !== null) {
//     return "nobody"
// }
// This works but lets the winner change except on the very first go only when you refresh using the reset button. When refreshing the page it works every time without changing the winner....same as above

//   if (board !== [[null, null, null], [null, null, null], [null, null, null]] && checkWinner !== "Noughts wins" && checkWinner !== "Crosses wins") {
 //  return "nobody"        
  // }
  // This shows nobody the whole time until noughts or crosses wins. The winner doesn't change though


//   if (checkWinner !== "Noughts wins" && checkWinner !== "Crosses wins") { 
 //  return "nobody"   
//   }
//  This shows nobody the whole time until noughts or crosses wins. This also lets the winner change whereas without this the winner doesn't change






 //  row1 = board[0]
  // console.log(row1)

//   var checkWinner = (board[0] === ["nought", "nought", "nought"]) ? "Noughts wins" : "Noughts doesn't win";
// console.log(checkWinner)

//if (board[0] === ["nought", "nought", "nought"]){
//console.log ("Noughts Wins")}




//function checkNoughts() { 
//    console.log(board[1])}

// I want to check if there are 3 in a row of o or x
//for loop needed here

//if board = [[x, x, x], [null, null, null], [null, null, null]]
//if  board[0][0] && board[0][1] && board [0][2] === x 
//if (condition) {

 //if (board !== [[null, null, null], [null, null, null], [null, null, null]]) {console.log ""}

 //board[row][column] === null

//for (let i = 0; i < 3; i++) {
    //if (board[i] === ["nought", "nought", "nought"])
    //console.log("Noughts is the winner!")}

   

//    if (board[i] === [nought, nought, nought] i<2) 
//{
 //if board[0] === [nought, nought, nought]
 //if board[1] === [nought, nought, nought]
 //if board[2] === [nought, nought, nought]
 //console.log("Noughts is the winner!")
//}

 //for (let row = 0; row < 3; row++) {
     //const element = array[row];
 //}

 //can set nought/cross to a score and then when checking for 3 in a row, check if the 'points' = 3. Set back to 0 for each new row/column being checked.

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called")
    board = [[null, null, null], 
             [null, null, null], 
             [null, null, null]];
    noughtsTurn = true
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard(){ 
    // if (!gameOver) {
    console.log("getBoard was called")
    return board 
   // } 
}

//return [[null, null, null], [null, null, null], [null, null, null]];
   // if row 0 and column 0, put nought/cross in 0,0 
//}
//}

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

