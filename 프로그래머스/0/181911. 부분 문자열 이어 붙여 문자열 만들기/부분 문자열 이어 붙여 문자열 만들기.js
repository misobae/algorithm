function solution(my_strings, parts) {
    const result = my_strings.reduce((acc, cur, idx) => {
        return acc + cur.slice(parts[idx][0], parts[idx][1] + 1);
    }, '');
    
    return result;
}