function solution(a, b) {
    const numA = Number(`${a}${b}`);
    const numB = Number(2 * a * b);
    
    return Math.max(numA, numB);
}