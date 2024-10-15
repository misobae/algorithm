function solution(my_string) {
    const alphabetArr = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', ...'abcdefghijklmnopqrstuvwxyz'];
    let result = [];
    
    for (const char of alphabetArr) {
        result.push(my_string.split(char).length - 1);
    }
    
    return result;
}