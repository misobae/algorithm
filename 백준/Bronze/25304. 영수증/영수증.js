const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let sum = 0;

for (let i = 2; i < input.length; i++) {
  const [price, number] = input[i].split(' ');

  sum += Number(price) * Number(number);
}

console.log(Number(input[0]) === sum ? 'Yes' : 'No');