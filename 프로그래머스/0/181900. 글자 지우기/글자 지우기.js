function solution(my_string, indices) {
    return [...my_string].reduce((acc, cur, idx) => {
        if (!indices.includes(idx)) acc += cur;
        
        return acc;
    }, '');
}