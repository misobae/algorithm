function solution(n) {
    const target = n.toString(2).match(/1/g).length;
    let result = n + 1;
    
    while (target !== result.toString(2).match(/1/g).length) {
        result++;
    }
    
    return result;
}