let board = [];
let clickedCell = "";
let currentPlayer = "Player1";
let firstMovePlayed = false;

zeroZero.addEventListener("click", () => { clickedCell = "ZeroZero"; playGame();});
zeroOne.addEventListener("click", () => { clickedCell = "ZeroOne"; playGame();});
zeroTwo.addEventListener("click", () => { clickedCell = "ZeroTwo"; playGame();});
oneZero.addEventListener("click", () => { clickedCell = "OneZero"; playGame();});
oneOne.addEventListener("click", () => { clickedCell = "OneOne"; playGame();});
oneTwo.addEventListener("click", () => { clickedCell = "OneTwo"; playGame();});
twoZero.addEventListener("click", () => { clickedCell = "TwoZero"; playGame();});
twoOne.addEventListener("click", () => { clickedCell = "TwoOne"; playGame();});
twoTwo.addEventListener("click", () => { clickedCell = "TwoTwo"; playGame();});

let playerAnnouncementText = document.getElementById("playerText");
let winnerText = document.getElementById("winnerText");
let winnerpopup = document.getElementById("winnerpopup");
let zeroZeroButton = document.getElementById("zeroZero");
let zeroOneButton = document.getElementById("zeroOne");
let zeroTwoButton = document.getElementById("zeroTwo");
let oneZeroButton = document.getElementById("oneZero");
let oneOneButton = document.getElementById("oneOne");
let oneTwoButton = document.getElementById("oneTwo");
let twoZeroButton = document.getElementById("twoZero");
let twoOneButton = document.getElementById("twoOne");
let twoTwoButton = document.getElementById("twoTwo");

// updates board with new cell value //
function populateCell(row, column, state) {
        return {row: row, column: column, state: state};
}  


// create empty gameboard in form of an array //

function Gameboard () {
    const rows = 3;
    const columns = 3;
    board =[];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(populateCell(i, j, null));
        }
    }
    console.log(board);
}

Gameboard();

// Game logic //
function playGame () {
        const cell = identifyCell();
            if (cell === false) {
            return; // Invalid move, do nothing
        }

        // check which cell is clicked and define row and column values//
        function identifyCell() {
            if (clickedCell === "ZeroZero" && currentPlayer === "Player1" && board[0][0].state === null) {
                zeroZeroButton.textContent= "X";
                return {row: 0, column: 0 };
            }; 

            if (clickedCell === "ZeroZero" && currentPlayer === "Player2" && board[0][0].state === null) {
                zeroZeroButton.textContent= "O";
                return {row: 0, column: 0 };
            };

            if (clickedCell === "ZeroOne" && currentPlayer === "Player1" && board[0][1].state === null) {
                zeroOneButton.textContent= "X";
                return {row: 0, column: 1 };
            };

            if (clickedCell === "ZeroOne" && currentPlayer === "Player2" && board[0][1].state === null) {
                zeroOneButton.textContent= "O";
                return {row: 0, column: 1 };
            };

            if (clickedCell === "ZeroTwo" && currentPlayer === "Player1" && board[0][2].state === null) {
                zeroTwoButton.textContent= "X";
                return {row: 0, column: 2 };
            };

            if (clickedCell === "ZeroTwo" && currentPlayer === "Player2" && board[0][2].state === null) {
                zeroTwoButton.textContent= "O";
                return {row: 0, column: 2 };
            };

            if (clickedCell === "OneZero" && currentPlayer === "Player1" && board[1][0].state === null) {
                oneZeroButton.textContent= "X";
                return {row: 1, column: 0 };
            };

            if (clickedCell === "OneZero" && currentPlayer === "Player2" && board[1][0].state === null) {
                oneZeroButton.textContent= "O";
                return {row: 1, column: 0 };
            };

            if (clickedCell === "OneOne" && currentPlayer === "Player1" && board[1][1].state === null) {
                oneOneButton.textContent= "X";
                return {row: 1, column: 1 };
            };

            if (clickedCell === "OneOne" && currentPlayer === "Player2" && board[1][1].state === null) {
                oneOneButton.textContent= "O";
                return {row: 1, column: 1 };
            };

            if (clickedCell === "OneTwo" && currentPlayer === "Player1" && board[1][2].state === null) {
                oneTwoButton.textContent= "X";
                return {row: 1, column: 2 };
            };

            if (clickedCell === "OneTwo" && currentPlayer === "Player2" && board[1][2].state === null) {
                oneTwoButton.textContent= "O";
                return {row: 1, column: 2 };
            };
            
            if (clickedCell === "TwoZero" && currentPlayer === "Player1" && board[2][0].state === null) {
                twoZeroButton.textContent= "X";
                return {row: 2, column: 0 };
            };

            if (clickedCell === "TwoZero" && currentPlayer === "Player2" && board[2][0].state === null) {
                twoZeroButton.textContent= "O";
                return {row: 2, column: 0 };
            };

            if (clickedCell === "TwoOne" && currentPlayer === "Player1" && board[2][1].state === null) {
                twoOneButton.textContent= "X";
                return {row: 2, column: 1 };
            };

            if (clickedCell === "TwoOne" && currentPlayer === "Player2" && board[2][1].state === null) {
                twoOneButton.textContent= "O";
                return {row: 2, column: 1 };
            };

            if (clickedCell === "TwoTwo" && currentPlayer === "Player1" && board[2][2].state === null) {
                twoTwoButton.textContent= "X";
                return {row: 2, column: 2 };
            };

            if (clickedCell === "TwoTwo" && currentPlayer === "Player2" && board[2][2].state === null) {
                twoTwoButton.textContent= "O";
                return {row: 2, column: 2 };
            };
            
            return false;
        };
        

        // take row and column values and check which player clicked and calls the populate cell function //
        function logCell () {
            const cell = identifyCell();

            if (cell === false) {
                return;};
            
            if (currentPlayer === "Player1" && cell && board[cell.row][cell.column].state === null) {
                const newCell = populateCell(cell.row, cell.column, "Player1");
                board[cell.row][cell.column]= newCell;

            };
            if (currentPlayer === "Player2" && cell && board[cell.row][cell.column].state === null) {
                const newCell = populateCell(cell.row, cell.column, "Player2");
                board[cell.row][cell.column]= newCell;
            };
        };


        function showNextPlayer () {
                    if (currentPlayer === "Player1") {
                        playerAnnouncementText.textContent ="It is Player 2's turn now!";
                        currentPlayer = "Player2";
                    }
                    else if (currentPlayer === "Player2") {
                        playerAnnouncementText.textContent ="It is Player 1's turn now!";
                        currentPlayer = "Player1";
                    }
                    
        };
 
        logCell(cell);

        if (!winnerCheck()) {
         showNextPlayer();
         }

        console.log(board);
        
        winnerCheck();
      

}


// Results logic //

function winnerCheck () {
        /* let Player1 = "";
        let Player2 = ""; */
        // checks if there are three crosses from one player in a row //
        function evaluateIfRowHasWinner () {
            if (board[0][0].state === "Player1" && board[0][1].state === "Player1" && board[0][2].state === "Player1") {
                showWinner("Player1"); return true}
            if (board[1][0].state === "Player1" && board[1][1].state === "Player1" && board[1][2].state === "Player1") {
                showWinner("Player1"); return true}
            if (board[2][0].state === "Player1" && board[2][1].state === "Player1" && board[2][2].state === "Player1") {
                showWinner("Player1"); return true}
            if (board[0][0].state === "Player1" && board[1][0].state === "Player1" && board[2][0].state === "Player1") {
                showWinner("Player1"); return true}
            if (board[0][1].state === "Player1" && board[1][1].state === "Player1" && board[2][1].state === "Player1") {
                showWinner("Player1"); return true}
            if (board[0][2].state === "Player1" && board[1][2].state === "Player1" && board[2][2].state === "Player1") {
                showWinner("Player1"); return true}
            if (board[0][0].state === "Player2" && board[0][1].state === "Player2" && board[0][2].state === "Player2") {
                showWinner("Player2"); return true}
            if (board[1][0].state === "Player2" && board[1][1].state === "Player2" && board[1][2].state === "Player2") {
                showWinner("Player2"); return true}
            if (board[2][0].state === "Player2" && board[2][1].state === "Player2" && board[2][2].state === "Player2") {
                showWinner("Player2"); return true}
            if (board[0][1].state === "Player2" && board[1][1].state === "Player2" && board[2][1].state === "Player2") {
                showWinner("Player2"); return true}
            if (board[0][2].state === "Player2" && board[1][2].state === "Player2" && board[2][2].state === "Player2") {
                showWinner("Player2"); return true}
            if (board[0][0].state === "Player2" && board[1][0].state === "Player2" && board[2][0].state === "Player2") {
                showWinner("Player2"); return true}
            return false;
        };

        // checks if there are three crosses of one player in a diagonal //    
        function evaluateIfDiagonalHasWinner () {
            if (board[0][0].state === "Player1" && board[1][1].state === "Player1" && board[2][2].state === "Player1") {
                showWinner("Player1"); return true}
            if (board[0][2].state === "Player1" && board[1][1].state === "Player1" && board[2][0].state === "Player1") {
                showWinner("Player1"); return true}
            if (board[0][0].state === "Player2" && board[1][1].state === "Player2" && board[2][2].state === "Player2") {
                showWinner("Player2"); return true}
            if (board[0][2].state === "Player2" && board[1][1].state === "Player2" && board[2][0].state === "Player2") {
                showWinner("Player2"); return true}
            return false;
        };

        function showWinner (playerName) {
            winnerpopup.style.display = "flex";
            winnerText.textContent = "The game is over! Congratulations "+ playerName +" you are the winner!";
        };

        // Return true if any of the checks found a winner
        return evaluateIfRowHasWinner() || evaluateIfDiagonalHasWinner();
};


Gameboard();
playGame();
console.log(board);
console.log(winnerCheck());