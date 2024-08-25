function solution(my_string, overwrite_string, s) {
    // my_string의 s번째 앞까지 자른다
    // 덮어쓴 부분 이후의 나머지를 자른다.
    // 합친다.
    
    const front = my_string.substring(0, s);
    const back = my_string.substring(s + overwrite_string.length);
    
    return front + overwrite_string + back;
}