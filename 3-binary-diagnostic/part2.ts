// import input
import fs from 'fs';
let input = fs.readFileSync('input.txt', 'utf8').split('\n');

let o2 = input;
let co2 = input;

// look at most common number in each column
for (let column = 0; column < input[0].length; column++) {
  let ones = 0;
  let zeros = 0;

  for (let row = 0; row < input.length; row++) {
    input[row].charAt(column) === '1' ? ones++ : zeros++;
  }

  let most = ones > zeros ? '1' : '0';
  console.log(`Column ${column}: most ${most}`);

  // for (let row = 0; row < o2.length; row++) {
  //   // console.log(input[row].charAt(column));
  //   o2 = o2.filter((row) => row.charAt(column) === most);
  // }
  for (let row = 0; row < co2.length; row++) {
    console.log(input[row].charAt(column));
    co2 = co2.filter((row) => row.charAt(column) !== most);
    console.log(co2);
  }
}

// console.log(o2);
// console.log(co2);
