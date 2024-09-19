function solution(l, r) {
    const arr = [];
    
    for (let i = l; i <= r; i++) {
        const strings = i.toString();
        let isValid = true;
        
        for (let str of strings) {
            if (str !== '0' && str !== '5') {
                isValid = false;
            }
        }
        
        if (isValid) {
            arr.push(i);   
        }
    }
    
    return arr.length === 0 ? [-1] : arr;
}