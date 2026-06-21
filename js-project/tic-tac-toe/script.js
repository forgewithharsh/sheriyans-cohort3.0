let currentPlayer = "X";
let arr = Array(9).fill(null);

const winPatterns = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3

  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3

  [0, 4, 8], // Diagonal
  [2, 4, 6], // Diagonal
];

function checkWinner() {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;

    if (arr[a] !== null && arr[a] === arr[b] && arr[b] === arr[c]) {
      document.write(`Winner! is ${currentPlayer} :)`);
      return;
    }

    if (!arr.some((e) => e === null)) {
      document.write("Draw! No one is the Winner :(");
      return;
    }
  }
}

function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}
