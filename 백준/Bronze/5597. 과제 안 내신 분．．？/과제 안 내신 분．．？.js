const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const students = new Set(input);
let unSubmitted = [];

for (let i = 1; i <= 30; i++) {
  if (!students.has(i.toString())) {
    unSubmitted.push(i);
  }
}

unSubmitted.sort((a, b) => a - b).forEach(n => console.log(n));