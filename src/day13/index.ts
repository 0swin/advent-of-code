import run from 'aocrunner';
import { table } from 'console';

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n\n');
  let points = input[0]
    .split('\n')
    .map((x) => x.split(',').map((x) => parseInt(x)));
  let folds = input[1]
    .split('\n')
    .map((x) => x.split(' ').slice(2, 3))
    .map((x) => x.toString().split('='));
  for (let i = 0; i < folds.length; i++) {
    // const element = folds[i];
    folds[i];
  }
  console.table(points);
  console.table(folds);
  // get paper dimensions then create table
  let paperX = 0;
  let paperY = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] > paperX) paperX = points[i][0];
    if (points[i][1] > paperY) paperY = points[i][1];
  }
  let paper = Array(paperY + 1)
    .fill(0)
    .map(() => Array(paperX + 1).fill(0));
  // generate points on the grid
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    paper[point[1]][point[0]]++;
  }
  console.table(paper);
  // horizontal fold
  function horizontal(y: number) {
    for (let i = paper.length - 1; i > y; i--) {
      let diff = y - (i - y);
      for (let j = 0; j < paper[i].length; j++) {
        paper[diff][j] += paper[i][j];
      }
      paper.splice(i, 1);
      // console.table(paper);
    }
  }
  // vertical fold
  function vertical(x: number) {
    for (let i = 0; i < paper.length; i++) {
      const line = paper[i];
      for (let j = line.length - 1; j > x; j--) {
        let diff = x - (j - x);
        line[diff] += line[j];
        line.splice(j, 1);
      }
    }
  }
  // follow instructions
  // for (let i = 0; i < folds.length; i++) {
  for (let i = 0; i < 1; i++) {
    console.log(folds[i]);
    if (folds[i][0] === 'y') {
      horizontal(parseInt(folds[i][1]));
    } else if (folds[i][0] === 'x') {
      vertical(parseInt(folds[i][1]));
    }
  }

  let score = 0;
  for (let i = 0; i < paper.length; i++) {
    const line = paper[i];
    for (let j = 0; j < line.length; j++) {
      const cell = line[j];
      if (cell != 0) {
        score++;
      }
    }
  }
  console.log(score);
  return score;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const testInput = `
  6,10
  0,14
  9,10
  0,3
  10,4
  4,11
  6,0
  6,12
  4,1
  0,13
  10,12
  3,4
  3,0
  8,4
  1,10
  2,14
  8,10
  9,0

  fold along y=7
  fold along x=5
`;

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 17,
      },
    ],
    solution: part1,
  },
  part2: {
    // tests: [
    //   {
    //     input: testInput,
    //     expected: '',
    //   },
    // ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
