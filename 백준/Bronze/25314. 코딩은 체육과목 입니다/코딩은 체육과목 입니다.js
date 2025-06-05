const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

let longArr = [];

for (let i = 1; i <= input / 4; i++) {
  longArr.push('long');
}

longArr.push('int');

console.log(longArr.join(' '));