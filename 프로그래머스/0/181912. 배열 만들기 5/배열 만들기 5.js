function solution(intStrs, k, s, l) {
    let arr = [];
    
    intStrs.map((number) => {
        const slicedNumber = Number(number.slice(s, s + l));
        
        if (slicedNumber > k) {
            arr.push(slicedNumber);
        }
    });
    
    return arr;
}