// import input
import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf8');

// split the input into an array of strings
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

console.log(count);
