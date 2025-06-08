const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(' ').map(Number);
const basket = new Array(N).fill(0);

for (let n = 1; n <= M; n++) {
  const [i, j, k] = input[n].split(' ').map(Number);

  for (let s = i - 1; s <= j - 1; s++) {
    basket[s] = k;
  }
}

console.log(basket.join(' '));
