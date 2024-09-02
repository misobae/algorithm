function solution(num, n) {
    // num이 n의 배수이면 1을, 아니면 0을
    if (num % n !== 0) {
        return 0;
    }
    
    return 1;
}