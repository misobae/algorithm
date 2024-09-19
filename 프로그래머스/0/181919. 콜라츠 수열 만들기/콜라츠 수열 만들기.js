function solution(n) {
    const arr = [n];
    
    for (let i = n; i !== 1;) {
        if (i % 2 === 0) {
            i = i / 2;
        } else {
            i = 3 * i + 1;
        }
        arr.push(i);
    }
    
    return arr;
}