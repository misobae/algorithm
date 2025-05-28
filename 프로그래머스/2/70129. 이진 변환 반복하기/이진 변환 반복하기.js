function solution(s) {
    let count = 0;
    let zeroCount = 0;

    while (s !== "1") {
        const zeros = [...s].filter(char => char === '0').length;
        zeroCount += zeros;
     
        const ones = s.replace(/0/g, '');
        s = ones.length.toString(2);
        
        count++;
    }

    return [count, zeroCount];
}