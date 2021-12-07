// import input
import fs from 'fs';
let input = fs.readFileSync('input.txt', 'utf8').split('\n');

let o2 = input;
let co2 = input;
let o2most = '';
let co2most = '';

// look at most common number in each column
for (let column = 0; column < input[0].length; column++) {
  let o2ones = 0;
  let o2zeros = 0;
  let co2ones = 0;
  let co2zeros = 0;

  for (let row = 0; row < o2.length; row++) {
    o2[row].charAt(column) === '1' ? o2ones++ : o2zeros++;
  }
  for (let row = 0; row < co2.length; row++) {
    co2[row].charAt(column) === '1' ? co2ones++ : co2zeros++;
  }

  // most = ones > zeros || ones === zeros ? '1' : '0';
  if (o2ones > o2zeros || o2ones === o2zeros) {
    o2most = '1';
  } else {
    o2most = '0';
  }
  if (co2ones > co2zeros || co2ones === co2zeros) {
    co2most = '1';
  } else {
    co2most = '0';
  }

  for (let row = 0; row <= o2.length; row++) {
    if (o2.length === 1) {
      console.log('o2 done');
      break;
    }
    o2 = o2.filter((row) => row.charAt(column) === o2most);
  }
  for (let row = 0; row <= co2.length; row++) {
    if (co2.length === 1) {
      console.log('co2 done');
      break;
    }
    co2 = co2.filter((row) => row.charAt(column) !== co2most);
  }
}

console.log(o2);
console.log(co2);

// convert o2 from binary to decimal
const o2dec = parseInt(o2[0], 2);
const co2dec = parseInt(co2[0], 2);
console.log(o2dec);
console.log(co2dec);
console.log('Result: ' + o2dec * co2dec);
