function solution(arr) {
    const sum = arr.reduce((arr, cur) => arr + cur, 0);
    
    return sum / arr.length;
}