import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split(',')
    .map((x) => parseInt(x))
    .sort((a, b) => (a > b ? 1 : -1));
  const medianPos = input[input.length / 2];
  const fuel = input.map((x) => Math.abs(x - medianPos));
  const totalFuel = fuel.reduce((a, b) => a + b, 0);

  return `${totalFuel}`;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split(',')
    .map((x) => parseInt(x))
    .sort((a, b) => (a > b ? 1 : -1));

  let leastFuel = Infinity;
  for (let i = 0; i < input.length; i++) {
    const moves = input.map((x) => Math.abs(x - i));
    const fuel = moves.map((x) => (x * (x + 1)) / 2);
    const totalFuel = fuel.reduce((a, b) => a + b, 0);
    if (totalFuel < leastFuel) leastFuel = totalFuel;
  }
  console.log(leastFuel);

  return `${leastFuel}`;
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
      {
        input: `16,1,2,0,4,2,7,1,2,14`,
        expected: '168',
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
