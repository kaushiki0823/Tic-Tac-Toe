let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);
    if (gameBoard[index] === '' && !checkWin()) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWin()) {
            alert(currentPlayer + ' wins!');
        } else if (gameBoard.every(cell => cell !== '')) {
            alert("It's a draw!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    return winningCombos.some(combination => {
        const [a, b, c] = combination;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
    });
}