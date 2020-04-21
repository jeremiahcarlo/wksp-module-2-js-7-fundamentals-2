// tic tac toe

// 1. make the board 
    // 1 board <div>
    // 9 cells
    // player 1 / player 2
    // indicate who's turn it is. 
// 2. cells need to be clickable 
    // clicking adds a value (x or o) to the cell
    // ** once there is a value, it can't be changed.
// 3. clear the board (optional)
// 4. 2 players
    // flag for current player
    // each player is a assigned either 'x' or 'o'
// 5. create an array of current cell values; 
    // refresh on each change
// 6. create all win conditions
    // ...

    const game = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,    
];
const board = document.getElementById('board');
const player1 = document.getElementById('player-1');
const player2 = document.getElementById('player-2');
const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';
let COUNTER = 0;
// game starts with player 1
let currentPlayer = '1';
player1.classList.add('active');
function win() {
    console.log(currentPlayer);
    board.removeEventListener('click', handleClick);
    alert(`Player ${currentPlayer} wins!`);
}
function verifyWin() {
    // ROWS
    if (game[0] === game[1] && game[1] === game[2]) win();
    if (game[3] === game[4] && game[4] === game[5]) win();
    if (game[6] === game[7] && game[7] === game[8]) win();
    // COLUMNS
    if (game[0] === game[3] && game[3] === game[6]) win();
    if (game[1] === game[4] && game[4] === game[7]) win();
    if (game[2] === game[5] && game[5] === game[8]) win();
    // DIAGONALS
    if (game[0] === game[4] && game[4] === game[8]) win();
    if (game[2] === game[4] && game[4] === game[6]) win();
}
function togglePlayer() {
    currentPlayer = (currentPlayer === '1') ? '2' : '1';
    player1.classList.toggle('active');
    player2.classList.toggle('active');
}
function handleClick(event) {
    const cell = event.target.id;
    const currentCellDiv = document.getElementById(cell);
    const cellId = cell.charAt(cell.length - 1);
    const icon = (currentPlayer === '1') ? PLAYER_1_ICON : PLAYER_2_ICON;
    if (typeof game[cellId] === 'number') {
        currentCellDiv.innerText = icon;
        // add value to game array
        game[cellId] = icon;
        COUNTER += 1;
        if (COUNTER < 9) {
            verifyWin();
            togglePlayer();
        } else {
            alert('DRAW!');
        }
    }
}
board.addEventListener('click', handleClick);