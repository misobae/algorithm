function solution(numbers) {
    // new Set을 만드는 데 선형 시간이 걸림
    // Set은 내부적으로 해시 테이블을 사용
    const numSet = new Set(numbers);
    
    // 이후 Set.has(x) 호출 시 x의 해시 value를 계산하고,
    // 해시 값을 기반으로 내부 저장 공간에서 해당 원소를 찾음 (상수 시간)
    return Array.from({ length: 10 }, (_, i) => i).reduce((acc, cur) => acc + (numSet.has(cur) ? 0 : cur), 0);
    
//     let sum = 0;
    
//     Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (x) => {
//         if (!numbers.includes(x)) sum = sum + x; // includes 선형시간
//     })
    
//    return sum;
}