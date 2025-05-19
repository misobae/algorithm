function solution(number, limit, power) {
    let result = 0;
    
    const getDivisorCount = (n) => {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                count++;
                if (i !== n / i) count++;
            }
        }
        return count;
    }
    
    for (let i = 1; i <= number; i++) {
        const count = getDivisorCount(i);
        result += count > limit ? power : count;
    }
    
    return result;
}