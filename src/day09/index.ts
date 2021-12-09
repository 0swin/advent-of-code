import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split('\n')
    .map((row) => row.split('').map((col) => parseInt(col)));

  console.table(input);
  let lowpoints: number[] = [];

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[row].length; col++) {
      // if cell is inferior to cell above it
      if (
        typeof input[row - 1] === 'undefined' ||
        input[row][col] < input[row - 1][col]
      ) {
        // if cell is inferior to cell to the left
        if (
          typeof input[row][col - 1] === 'undefined' ||
          input[row][col] < input[row][col - 1]
        ) {
          // lowpoints.push(input[row][col]);
          // if cell is inferior to cell to the right
          if (
            typeof input[row][col + 1] === 'undefined' ||
            input[row][col] < input[row][col + 1]
          ) {
            // if cell is inferior to cell below
            if (
              typeof input[row + 1] === 'undefined' ||
              input[row][col] < input[row + 1][col]
            ) {
              lowpoints.push(input[row][col]);
            }
          }
        }
      }
    }
  }
  console.log(lowpoints);
  const score = lowpoints.map((x) => x + 1).reduce((a, b) => a + b);

  return score;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const testInput = `
  2199943210
  3987894921
  9856789892
  8767896789
  9899965678
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 15,
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
