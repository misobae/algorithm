function solution(num_list) {
   let oddSum = 0;
    let evenSum = 0;
    
    num_list.forEach((num, index) => {
        if ((index + 1) % 2 === 1) {
            oddSum += num;
        } else {
            evenSum += num;
        }
    });
    
    return oddSum > evenSum ? oddSum : evenSum;
}