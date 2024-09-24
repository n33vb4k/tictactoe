let playerText = document.getElementById('playerText');
let restartbtn = document.getElementById('restartbtn');

let boxes = Array.from(document.getElementsByClassName('box'));

console.log(boxes);

const X_TEXT = 'X';
const O_TEXT = 'O';
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

function boxClicked(e) {
    console.log(e.target);
}

startGame();