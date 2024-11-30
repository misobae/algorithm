function solution(arr) {
    let current = [...arr];
    
    for (let x = 0; ; x++) {
        const next = current.map(num => (
            num >= 50 && num % 2 === 0 ? num / 2 :
            num < 50 && num % 2 !== 0 ? num * 2 + 1 :
            num
        ));
        
        if (current.every((val, idx) => val === next[idx])) {
            return x;
        }
        
        current = next;
    }
}