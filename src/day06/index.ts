import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const solution = (days: number) => (rawInput: string) => {
  const input = parseInput(rawInput)
    .split(',')
    .map((x) => parseInt(x));
  const fishes = Array(9).fill(0);

  input.forEach((x) => fishes[x]++);
  console.log(fishes);

  for (let i = 0; i < days; i++) {
    const temp = fishes[0];
    fishes[0] = fishes[1];
    fishes[1] = fishes[2];
    fishes[2] = fishes[3];
    fishes[3] = fishes[4];
    fishes[4] = fishes[5];
    fishes[5] = fishes[6];
    fishes[6] = fishes[7] + temp;
    fishes[7] = fishes[8];
    fishes[8] = temp;
  }

  return `${fishes.reduce((a, b) => a + b, 0)}`;
};

const testInput = `3,4,3,1,2`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: '5934',
      },
    ],
    solution: solution(80),
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: '26984457539',
      },
    ],
    solution: solution(256),
  },
  trimTestInputs: true,
  onlyTests: false,
});
