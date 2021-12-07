import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputArray = input.split('\n');

  // count number of currentMeasurements greater than previousMeasurements
  let previousMeasurement = 0;
  let count = 0;

  for (let index = 1; index < inputArray.length; index++) {
    const currentMeasurement = parseInt(inputArray[index]);
    if (currentMeasurement > previousMeasurement) {
      count++;
    }
    previousMeasurement = currentMeasurement;
  }
  return count;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputArray = input.split('\n');

  // count number of currentMeasurements greater than previousMeasurements
  let previousMeasurement = 0;
  let count = 0;

  for (let index = 0; index < inputArray.length; index++) {
    const currentMeasurement =
      parseInt(inputArray[index - 1]) +
      parseInt(inputArray[index]) +
      parseInt(inputArray[index + 1]);
    if (currentMeasurement > previousMeasurement) {
      count++;
    }
    previousMeasurement = currentMeasurement;
  }
  return count;
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
