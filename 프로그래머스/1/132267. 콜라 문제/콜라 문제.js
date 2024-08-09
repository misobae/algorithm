function solution(a, b, n) {
    let totalCoke = 0;

    // n이 a개 이상일 때까지 반복
    while (n >= a) { 
        // n을 a로 나눈 몫만큼 콜라를 받음 (소수점은 버리기)
        const newCoke = Math.floor(n / a) * b; 
        totalCoke += newCoke; // 받은 콜라를 합산
        n = n % a + newCoke; // 나머지 빈 병 + 새로 받은 콜라의 빈 병 수로 n을 업데이트
    }

    return totalCoke;
}