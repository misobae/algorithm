const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(' ').map(Number);
const baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  const reversed = baskets.slice(start - 1, end).reverse();
  baskets.splice(start - 1, end - start + 1, ...reversed);
}

console.log(baskets.join(' '));