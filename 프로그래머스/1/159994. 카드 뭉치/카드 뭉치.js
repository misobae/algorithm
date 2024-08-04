function solution(cards1, cards2, goal) {
    
    // n번째가 일치? 다중 포인터?? 
    // cards에 각각 포인터가 있다.
    let pointer1 = 0;
    let pointer2 = 0;    
    
    
    // 1과 비교해 goal에 일치하지 않는 단어가 생기면 다음 카드로 넘어가기.
    // 2로 넘어갔는데 바로 goal과 일치하는 단어가 없다면 return "No"
    // 일치하는 단어가 생기면 다음 카드로 넘어가기.
    for (let word of goal) {
        if (pointer1 < cards1.length && cards1[pointer1] === word) {
            pointer1++;
        } else if (pointer2 < cards2.length && cards2[pointer2] === word) {
            pointer2++;
        } else {
            return "No"
        }
    }
    
    return "Yes"
}