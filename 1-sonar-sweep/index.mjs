import fetch from "node-fetch";

async function main() {
  const response = await fetch('https://adventofcode.com/2021/day/1/input');
  const input = await response.text();
  console.log(input);
}

main().catch(console.error);