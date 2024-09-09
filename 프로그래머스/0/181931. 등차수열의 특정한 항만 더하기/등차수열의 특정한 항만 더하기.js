function solution(a, d, included) {
    // 등차수열: 일정한 숫자를 더하면서 이어지는 수열
    // 첫 번째 항: a 
    // 그 다음 항은 "일정한 값 d"만큼 더해져서 나온다
    // included 배열의 i번째 값이 true면 그 항을 더한다
    return included.reduce((acc, cur, i) => {
        return cur ? acc + (a + i * d) : acc;
    }, 0);
}