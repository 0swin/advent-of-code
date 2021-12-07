import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

// split the input into an array of strings
const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inputArray = input.split('\n');

  let horizontal = 0;
  let depth = 0;
  let instruction = [];

  for (let index = 0; index < inputArray.length; index++) {
    instruction = inputArray[index].split(' ');
    if (instruction[0] === 'up') {
      depth -= parseInt(instruction[1]);
    } else if (instruction[0] === 'down') {
      depth += parseInt(instruction[1]);
    } else if (instruction[0] === 'forward') {
      horizontal += parseInt(instruction[1]);
    }
  }

  console.log('Depth: ' + depth);
  console.log('Horizontal: ' + horizontal);

  const result = depth * horizontal;
  console.log('Result: ' + result);
  return result;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  // split the input into an array of strings
  const inputArray = input.split('\n');

  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  let instruction = [];

  for (let index = 0; index < inputArray.length; index++) {
    instruction = inputArray[index].split(' ');
    // console.log(instruction);
    if (instruction[0] === 'up') {
      aim -= parseInt(instruction[1]);
    } else if (instruction[0] === 'down') {
      aim += parseInt(instruction[1]);
    } else if (instruction[0] === 'forward') {
      horizontal += parseInt(instruction[1]);
      depth += aim * parseInt(instruction[1]);
    }
  }

  console.log('Depth: ' + depth);
  console.log('Horizontal: ' + horizontal);

  const result = depth * horizontal;
  console.log('Result: ' + result);
  return result;
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
