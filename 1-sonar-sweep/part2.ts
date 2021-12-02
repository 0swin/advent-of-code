// import input
import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf8');

// split the input into an array of strings
const inputArray = input.split('\n');

// count number of currentMeasurements greater than previousMeasurements
let previousMeasurement = 0;
let count = 0;

for (let index = 0; index < inputArray.length; index++) {
  let currentMeasurement = parseInt(inputArray[index - 1]) + parseInt(inputArray[index]) + parseInt(inputArray[index + 1]);
  if (currentMeasurement > previousMeasurement) {
    count++;
  }
  previousMeasurement = currentMeasurement;
}

console.log(count);
