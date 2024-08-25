const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const num0 = Number(input[0]);
    const num1 = Number(input[1]);
    const sum = Number(input[0]) + Number(input[1]);
    
    console.log(`${num0} + ${num1} = ${sum}`)
});