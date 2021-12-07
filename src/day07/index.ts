import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split(',')
    .map((x) => parseInt(x))
    .sort((a, b) => (a > b ? 1 : -1));
  let medianPos = input[input.length / 2];
  let fuel = input.map((x) => Math.abs(x - medianPos));
  let totalFuel = fuel.reduce((a, b) => a + b);

  return `${totalFuel}`;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input: `16,1,2,0,4,2,7,1,2,14`,
        expected: '37',
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
