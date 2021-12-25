import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  let input = parseInput(rawInput)
    .split('\n')
    .map((row) => row.split('').map((cell) => parseInt(cell)));

  let flashes = 0;

  function increase(row: number, col: number) {
    // do nothing if cell is outside of grid dimensions
    if (row < 0 || row > 9 || col < 0 || col > 9) {
      return;
    } else {
      // increase automatically
      input[row][col]++;
    }

    // if level is over 9, flash and increase by 1 all adjascent cells
    if (input[row][col] > 9) {
      flashes++;
      input[row][col] = -20;
      increase(row - 1, col - 1);
      increase(row - 1, col + 0);
      increase(row - 1, col + 1);
      increase(row + 0, col - 1);
      increase(row + 0, col + 0);
      increase(row + 0, col + 1);
      increase(row + 1, col - 1);
      increase(row + 1, col + 0);
      increase(row + 1, col + 1);
    }
  }
  function steps(step: number) {
    for (let i = 0; i < step; i++) {
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
          increase(row, col);
        }
      }
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
          if (input[row][col] < 0) {
            input[row][col] = 0;
          }
        }
      }
    }
    console.table(input);
  }

  console.table(input);
  try {
    steps(100);
  } catch (error) {
    console.log(`Error : ${error}`);
  }
  console.log(`Flashes: ${flashes}`);

  return flashes;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const testInput = `
  5483143223
  2745854711
  5264556173
  6141336146
  6357385478
  4167524645
  2176841721
  6882881134
  4846848554
  5283751526
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 1656,
      },
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
