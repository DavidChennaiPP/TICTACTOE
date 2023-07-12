let currentPlayer = "X";
let gameEnded = false;

const placeSymbol = (cellIndex) => {
  if (gameEnded) return;

  const cell = document.getElementsByClassName("cell")[cellIndex];
  if (cell.textContent === "") {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWin()) {
      endGame(currentPlayer + " wins!");
    } else if (checkDraw()) {
      endGame("It's a draw!");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
};

const checkWin = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const cells = document.getElementsByClassName("cell");
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === cells[b].textContent &&
      cells[b].textContent === cells[c].textContent &&
      cells[a].textContent !== ""
    ) {
      return true;
    }
  }
  return false;
};

const checkDraw = () => {
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    if (cell.textContent === "") {
      return false;
    }
  }
  return true;
};

const endGame = (message) => {
  gameEnded = true;
  alert(message);
};

const resetBoard = () => {
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  }
  currentPlayer = "X";
  gameEnded = false;
};
