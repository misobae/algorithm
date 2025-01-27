function solution(num_str) {
    let count = 0;
    
    for (let i = 0; i < num_str.length; i++) {
        count += Number(num_str[i]);
    }
    
    return count;
}