// import input
import fs from 'fs';
const input = fs.readFileSync('input.txt', 'utf8');

let fishes = input.split(',').map((x) => parseInt(x));

let days = 80;
let newborns = 0;

function calcDay(fishes: number[], prevNewborns: number, days: number): number[] {
  let newborns = 0;
  if (days === 0) return fishes;
  fishes = fishes
    .map((x) => {
      let temp = x - 1;
      if (temp === 0) newborns++;
      return temp === -1 ? 6 : temp;
    })
    .concat(Array(prevNewborns).fill(8));
  console.log(fishes.length);

  return calcDay(fishes, newborns, days - 1);
}

console.log(calcDay(fishes, newborns, days).length);
