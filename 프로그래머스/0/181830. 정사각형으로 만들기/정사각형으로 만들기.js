function solution(arr) {
    const maxSize = Math.max(arr.length, ...arr.map(x => x.length));
    
    arr.forEach(row => {
        while (row.length < maxSize) row.push(0);
    })
    
    while (arr.length < maxSize) arr.push(new Array(maxSize).fill(0));
    
    return arr;
}