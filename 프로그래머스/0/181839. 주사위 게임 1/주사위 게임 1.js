function solution(a, b) {
    if (a % 2 === b % 2) {
        return a % 2 ? a ** 2 + b ** 2 : Math.abs(a - b);
    }
    return 2 * (a + b);
}