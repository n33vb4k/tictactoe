let playerText = document.getElementById('playerText');
let restartbtn = document.getElementById('restartbtn');
let boxes = Array.from(document.getElementsByClassName('box'));
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks');
let textColour = getComputedStyle(document.body).getPropertyValue('--orange');

console.log(boxes);

const X_TEXT = 'X';
const O_TEXT = 'O';
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

function boxClicked(e) {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if (playerHasWon() != false) {
            playerText.innerText = `${currentPlayer} has won!`;
            let winningBlocks = playerHasWon();
            winningBlocks.map(box => boxes[box].style.backgroundColor = winnerIndicator);
        }
        currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
    }

}

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition;
        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a, b, c];
        }
    }
    return false;
}

restartbtn.addEventListener('click', restart);

function restart() {
    spaces.fill(null);
    boxes.forEach(box => box.innerText = '');
    currentPlayer = X_TEXT;
    playerText.innerText = 'Tic Tac Toe';
    boxes.forEach(box => box.style.backgroundColor = '');
}

startGame();