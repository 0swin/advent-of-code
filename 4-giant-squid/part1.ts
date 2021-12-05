// import input
import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf8').split('\n\n');

let draws = input[0].split(',').map((x) => parseInt(x));

// convert draws from string to array of numbers
let boardsStr = input.map((board) => board.split('\n'));
boardsStr.shift();

// for each board in boards, convert to array of arrays of numbers
let boardsInt = boardsStr.map((board) =>
  board.map((row) =>
    row
      .split(' ')
      .filter((x) => x !== '')
      .map((x) => parseInt(x))
  )
);

let solvedBoard: number = 0;
let latestDraw: number = 0;
// for each drawn number
outer_loop: for (let draw = 0; draw < draws.length; draw++) {
  // for each board
  for (let board = 0; board < boardsInt.length; board++) {
    // replace the drawn number with -1 if present in a board
    for (let row = 0; row < boardsInt[board].length; row++) {
      for (let number = 0; number < boardsInt[board][row].length; number++) {
        if (boardsInt[board][row][number] === draws[draw]) {
          boardsInt[board][row][number] = -1;
        }
      }
    }
    // then check if board is solved
    if (boardsInt[board].some((x) => x.toString() == [-1, -1, -1, -1, -1].toString())) {
      solvedBoard = board;
      latestDraw = draws[draw];
      break outer_loop;
    } else {
      for (let col = 0; col < boardsInt[board][0].length; col++) {
        let verticalCount = 0;
        for (let row = 0; row < boardsInt[board].length; row++) {
          if (boardsInt[board][row][col] === -1) {
            verticalCount++;
          }
        }
        if (verticalCount === 5) {
          latestDraw = draws[draw];
          solvedBoard = board;
          break outer_loop;
        }
      }
    }
  }
}
console.log(`Board ${solvedBoard + 1} is solved`);
console.log(boardsInt[solvedBoard]);
let unmarkedSum: number = 0;
for (let rows = 0; rows < boardsInt[solvedBoard].length; rows++) {
  boardsInt[solvedBoard][rows].filter((x) => x !== -1);
  boardsInt[solvedBoard][rows].filter((x) => x !== -1).forEach((x) => (unmarkedSum += x));
}
console.log(`The sum of the numbers on the board is ${unmarkedSum}`);
console.log(`The latest draw was ${latestDraw}`);
console.log(`Score is ${unmarkedSum * latestDraw}`);
