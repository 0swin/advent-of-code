import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  // const input = parseInput(rawInput);

  // split the input into an array of strings
  const inputArray = rawInput.split('\n');

  // define average as array with inputArray.lenght items set to 0
  const gamma = new Array(inputArray[0].length).fill(0);
  const epsilon = new Array(inputArray[0].length).fill(0);

  // for each string in the array
  for (let i = 0; i < inputArray.length; i++) {
    // split into numbers
    const inputNumbers = inputArray[i].split('');

    // for each number in the array
    for (let j = 0; j < inputNumbers.length; j++) {
      // add the number to the average
      gamma[j] += parseInt(inputNumbers[j]);
    }
  }

  // for each number in the average
  for (let i = 0; i < gamma.length; i++) {
    // if the number is superior to half of inputArray.length then 1 else 0
    if (gamma[i] > inputArray.length / 2) {
      gamma[i] = 1;
      epsilon[i] = 0;
    } else {
      gamma[i] = 0;
      epsilon[i] = 1;
    }
  }

  // convert average to number
  const gammaBinary = gamma.join('');
  console.log(gammaBinary);
  const epsilonBinary = epsilon.join('');
  console.log(epsilonBinary);

  // convert averageBinary from binary to decimal
  const gammaDecimal = parseInt(gammaBinary, 2);
  console.log(gammaDecimal);
  const epsilonDecimal = parseInt(epsilonBinary, 2);
  console.log(epsilonDecimal);

  console.log(epsilonDecimal * gammaDecimal);
  return epsilonDecimal * gammaDecimal;
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
