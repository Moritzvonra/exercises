const currentPlayer = "Player2"
const clickedCell = "TwoOne"

let board = []
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

// Game logic //

function playGame () {
        // check which cell is clicked and define row and column values//
        function identifyCell() {
            if (clickedCell === "ZeroZero") {
                return {row: 0, column: 0 };
            };
            if (clickedCell === "ZeroOne") {
                return {row: 0, column: 1 };
            };
            if (clickedCell === "ZeroTwo") {
                return {row: 0, column: 2 };
            };
            if (clickedCell === "OneZero") {
                return {row: 1, column: 0 };
            };
            if (clickedCell === "OneOne") {
                return {row: 1, column: 1 };
            };
            if (clickedCell === "OneTwo") {
                return {row: 1, column: 2 };
            };
            if (clickedCell === "TwoZero") {
                return {row: 2, column: 0 };
            };
            if (clickedCell === "TwoOne") {
                return {row: 2, column: 1 };
            };
            if (clickedCell === "TwoTwo") {
                return {row: 2, column: 2 };
            };
        }

        // take row and column values and check which player clicked and calls the populate cell function //
        function logCell () {
            const cell = identifyCell();
            if (currentPlayer === "Player1" && cell && board[cell.row][cell.column].state === null) {
                const newCell = populateCell(cell.row, cell.column, "Player1");
                board[cell.row][cell.column]= newCell;
            };
            if (currentPlayer === "Player2" && cell && board[cell.row][cell.column].state === null) {
                const newCell = populateCell(cell.row, cell.column, "Player2");
                board[cell.row][cell.column]= newCell;
            };
        }

        // updates board with new cell value //
        function populateCell(row, column, state) {
                return {row: row, column: column, state: state};
        }
        window.populateCell = populateCell;
        Gameboard();
        logCell();
};

playGame();
console.log(board);