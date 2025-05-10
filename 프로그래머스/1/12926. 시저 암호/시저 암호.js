function solution(s, n) {
    const result = s.split('').map((x) => {
        if (x === ' ') return x;
        const isUpperCase = x >= 'A' && x <= 'Z';
        const base = isUpperCase ? 65 : 97;
        const shifted = (x.charCodeAt(0) - base + n) % 26 + base;
        
        return String.fromCharCode(shifted);
    })
    
    return result.join('');
}