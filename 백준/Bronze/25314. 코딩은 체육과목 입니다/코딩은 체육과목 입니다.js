const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

let text = '';

for (let i = 1; i <= input / 4; i++) {
  text += 'long ';
}

console.log(text + 'int');