function solution(a, b) {
    // 내적? 두 개의 같은 길이의 1차원 배열의 각 인덱스 값을 곱한 값들의 합을 구하는 연산
    return a.reduce((acc, cur, i) => acc += cur * b[i], 0);
}