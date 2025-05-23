function solution(s) {
    const arr = s.split(' ');
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        const value = Number(arr[i]);
        if (value < min) min = value;
        if (value > max) max = value;
    }
    
    return `${min} ${max}`;
}