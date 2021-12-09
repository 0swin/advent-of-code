import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  // Convert input to an array of coordinates
  let lines = input.split('\n').map((x) => {
    return x.split(' -> ').map((y) => y.split(',').map((z) => parseInt(z)));
  });

  // Keep only horizontal or vertical lines
  lines = lines.filter((x) => x[0][0] === x[1][0] || x[0][1] === x[1][1]);

  // Build grid
  let gridSize = 0;
  for (let index = 0; index < lines.length; index++) {
    lines[index].forEach((x) => {
      gridSize = Math.max(gridSize, x[1]);
      gridSize = Math.max(gridSize, x[0]);
    });
  }
  const grid = Array(gridSize)
    .fill(0)
    .map(() => Array(gridSize).fill(0));

  // Trace lines
  for (let line = 0; line < lines.length; line++) {
    const start = lines[line][0];
    const end = lines[line][1];

    if (start[0] === end[0]) {
      // vertical line
      if (start[1] < end[1]) {
        // top to botton
        for (let i = start[1]; i <= end[1]; i++) {
          grid[i][start[0]]++;
        }
      } else {
        // bottom to top
        for (let i = start[1]; i >= end[1]; i--) {
          grid[i][start[0]]++;
        }
      }
    } else if (start[1] === end[1]) {
      // horizontal line
      if (start[0] < end[0]) {
        // left to right
        for (let i = start[0]; i <= end[0]; i++) {
          grid[start[1]][i]++;
        }
      } else {
        // right to left
        for (let i = start[0]; i >= end[0]; i--) {
          grid[start[1]][i]++;
        }
      }
    }
  }

  // Count overlapping
  let overlaps = 0;
  grid.map((row) => {
    row.map((column) => {
      if (column > 1) {
        overlaps++;
      }
    });
  });

  console.log(`Lines overlaps : ${overlaps}`);

  return overlaps;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
