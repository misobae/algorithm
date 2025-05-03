function solution(numbers) {
    const sumArr = new Set();
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            sumArr.add(numbers[i] + numbers[j]);
        }
    }
    
    return [...sumArr].sort((a, b) => a - b);
}