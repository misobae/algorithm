function solution(A,B){
    // sort 메서드는 원본 배열 자체를 바꾼다
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((acc, cur, i) => acc + (cur * B[i]), 0);
}