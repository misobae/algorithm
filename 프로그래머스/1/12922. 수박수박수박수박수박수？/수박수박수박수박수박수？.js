function solution(n) {
    let result = [];
    
    for (let i = 1; n >= i; i++) {
        if (i % 2 === 0) {
            result.push('박');
        } else {
            result.push('수');
        }
    }
    
    return result.join('');
}