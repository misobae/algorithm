function solution(binomial) {
    const [a, op, b] = binomial.split(' ').map((x, i) => i % 2 === 0 ? Number(x) : x);
    
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            return null;
    }
}