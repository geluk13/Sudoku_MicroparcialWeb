const puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

const solution = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

const board = document.getElementById("board");
const resetBtn = document.getElementById("reset-btn");
const checkBtn = document.getElementById("check-btn");

function createBoard() {
  board.innerHTML = "";

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.classList.add("cell");
      input.dataset.row = row;
      input.dataset.col = col;

      if (puzzle[row][col] !== 0) {
        input.value = puzzle[row][col];
        input.disabled = true;
        input.classList.add("fixed");
      }

      input.addEventListener("input", () => {
        input.value = input.value.replace(/[^1-9]/g, "");
      });

      if ((col + 1) % 3 === 0 && col !== 8) input.classList.add("border-right");
      if ((row + 1) % 3 === 0 && row !== 8) input.classList.add("border-bottom");

      board.appendChild(input);
    }
  }
}

function resetBoard() {
  createBoard();
}

function verifyBoard() {
  const cells = document.querySelectorAll(".cell");
  let ok = true;

  cells.forEach((cell) => {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    if (parseInt(cell.value) !== solution[row][col]) {
      ok = false;
    }
  });

  if (ok) {
    window.location.href = "ganaste.html";
  } else {
    window.location.href = "perdiste.html";
  }
}

resetBtn.addEventListener("click", resetBoard);
checkBtn.addEventListener("click", verifyBoard);

createBoard();