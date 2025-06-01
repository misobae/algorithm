function solution(n) {
    let count = 0;
    
    for (let i = 1; (i * (i - 1)) / 2 < n; i++) {
        const numerator = n - (i * (i - 1)) / 2;
        
        if (numerator % i === 0) count++;
    }
    
    return count;
}