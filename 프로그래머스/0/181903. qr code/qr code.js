function solution(q, r, code) {
    const result = code.split('').reduce((acc, cur, idx) => {
        if (idx % q === r) {
            acc += cur;
        }
        
        return acc;
    }, '');
    
    return result;
}