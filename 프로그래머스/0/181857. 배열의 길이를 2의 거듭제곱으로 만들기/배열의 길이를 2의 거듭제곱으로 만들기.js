function solution(arr) {
    // 1. n은 1부터 시작
    // 2. arr.length가 2의 거듭제곱보다 크다면 n에 1 더해사 다시 계산
    // 3. 2의 거듭제곱 수가 배열의 길이보다 커졌을 때 배열의 나머지를 0으로 채운다.
    
    let n = 0;
    let n2 = 2 ** n;
    
    while (n2 < arr.length) {
        n++;
        n2 = 2 ** n;
    }
    
    return [...arr, ...Array(n2 - arr.length).fill(0)];
}