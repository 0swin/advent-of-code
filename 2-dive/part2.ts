// import input
import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf8');

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
