const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

const result = input.reduce((acc, cur) => acc += Number(cur), 0);

console.log(result)