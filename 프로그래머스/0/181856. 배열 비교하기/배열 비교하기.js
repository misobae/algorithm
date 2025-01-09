function solution(arr1, arr2) {
    const lengthDiff = arr1.length - arr2.length;
    if (lengthDiff !== 0) return lengthDiff > 0 ? 1 : -1;
    
    const sumDiff = arr1.reduce((a, c) => a + c, 0) - arr2.reduce((a, c) => a + c, 0);
    return sumDiff === 0 ? 0 : sumDiff > 0 ? 1 : -1;
}