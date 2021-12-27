import run from 'aocrunner';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n\n');
  let text = input[0];
  let rules = input[1]
    .split('\n')
    .map((x) => x.split(' -> '))
    .map((x) => ({
      match: x[0],
      replace: x[0].slice(0, 1) + x[1],
    }));

  console.log(text);
  console.table(rules);

  // insertions
  let temp: string[];

  let iterations = 10;

  for (let h = 0; h < iterations; h++) {
    temp = [];
    for (let i = 0; i < text.length; i++) {
      let pair = text[i] + text[i + 1];

      for (let j = 0; j < rules.length; j++) {
        if (pair == rules[j].match) {
          temp.push(rules[j].replace);
        }
      }
      if (pair.length > 2) {
        temp.push(pair[0]);
      }
    }
    text = temp.join('');
    console.log(temp.join(''));
  }
  console.log(text);

  // score calculation
  // let letters: { [letter: string]: number, } = {};
  let letters: { letter: string; count: number }[] = [];
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    let index = letters.findIndex((x) => x.letter == letter);
    if (index == -1) {
      letters.push({ letter, count: 1 });
    } else {
      letters[index].count++;
    }
  }
  // find min and max
  let max = 0;
  let min = Infinity;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].count > max) {
      max = letters[i].count;
    }
    if (letters[i].count < min) {
      min = letters[i].count;
    }
  }
  let score = max - min;

  return score;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const testInput = `
  NNCB

  CH -> B
  HH -> N
  CB -> H
  NH -> C
  HB -> C
  HC -> B
  HN -> C
  NN -> C
  BH -> H
  NC -> B
  NB -> B
  BN -> B
  BB -> N
  BC -> B
  CC -> N
  CN -> C
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 1588,
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
