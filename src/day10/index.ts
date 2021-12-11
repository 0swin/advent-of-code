import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
    .split(`\n`)
    .map((x) => x.split(``));
  // console.table(input);

  let score = 0;

  for (let row = 0; row < input.length; row++) {
    // let score = 0;
    let chunk: string[] = [];
    for (let cell = 0; cell < input[row].length; cell++) {
      if (
        input[row][cell] === '(' ||
        input[row][cell] === '[' ||
        input[row][cell] === '{' ||
        input[row][cell] === '<'
      ) {
        chunk.push(input[row][cell]);
      } else if (input[row][cell] === ')') {
        if (chunk.at(-1) === '(') chunk.pop();
        else {
          score += 3;
          break;
        }
      } else if (input[row][cell] === ']') {
        if (chunk.at(-1) === '[') chunk.pop();
        else {
          score += 57;
          break;
        }
      } else if (input[row][cell] === '}') {
        if (chunk.at(-1) === '{') chunk.pop();
        else {
          score += 1197;
          break;
        }
      } else if (input[row][cell] === '>') {
        if (chunk.at(-1) === '<') chunk.pop();
        else {
          score += 25137;
          break;
        }
      }
    }
    // console.log(chunk);
  }
  console.log(score);

  return score;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const testInput = `
  [({(<(())[]>[[{[]{<()<>>
  [(()[<>])]({[<{<<[]>>(
  {([(<{}[<>[]}>{[]{[(<()>
  (((({<>}<{<{<>}{[]{[]{}
  [[<[([]))<([[{}[[()]]]
  [{[{({}]{}}([{[{{{}}([]
  {<[[]]>}<{[{[{[]{()[[[]
  [<(<(<(<{}))><([]([]()
  <{([([[(<>()){}]>(<<{{
  <{([{{}}[<[[[<>{}]]]>[]]
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 26397,
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
