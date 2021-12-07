import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let fishes = input.split(',').map((x) => parseInt(x));

  let days = 80;
  let newborns = 0;

  function calcDay(
    fishes: number[],
    prevNewborns: number,
    days: number,
  ): number[] {
    let newborns = 0;
    if (days === 0) return fishes;
    fishes = fishes
      .map((x) => {
        let temp = x - 1;
        if (temp === 0) newborns++;
        return temp === -1 ? 6 : temp;
      })
      .concat(Array(prevNewborns).fill(8));
    console.log(fishes.length);

    return calcDay(fishes, newborns, days - 1);
  }

  return calcDay(fishes, newborns, days).length;
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
