function solution(my_string, k) {
    const arr = [];
    for(let i = 0; i < k; i++) {
        arr.push(my_string);
    }
    
    return arr.join('');
}