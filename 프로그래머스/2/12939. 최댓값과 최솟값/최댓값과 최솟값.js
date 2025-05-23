function solution(s) {
    const arr = s.split(' ');
    return Math.min(...arr) + ' ' + Math.max(...arr);
    // 코드는 매우 간결하지만 두 번 순회하므로 O(2n)
    // 배열의 길이가 짧을 경우에는 괜찮지만,
    // for문 한 번으로 순회하는 것이 효율적
}

// function solution(s) {
//     const arr = s.split(' ');
//     let min = arr[0];
//     let max = arr[0];
    
//     for (let i = 1; i < arr.length; i++) {
//         const value = Number(arr[i]);
//         if (value < min) min = value;
//         if (value > max) max = value;
//     }
    
//     return `${min} ${max}`;
// }