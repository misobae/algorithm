function solution(a, b) {
    // 문자열 a+b와 b+a 중 숫자로 더 큰 값을 리턴
    const numA = Number(a + "" + b);
    const numB = Number(b + "" + a);
    
    if (numA < numB) {
        return numB;
    };
    
    return numA;
}