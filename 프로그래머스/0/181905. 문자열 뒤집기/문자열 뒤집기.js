function solution(my_string, s, e) {
    const start = my_string.slice(0, s);
    const reversed = my_string.slice(s, e + 1).split('').reverse().join('');
    const end = my_string.slice(e + 1);
    
    return start + reversed + end;
}