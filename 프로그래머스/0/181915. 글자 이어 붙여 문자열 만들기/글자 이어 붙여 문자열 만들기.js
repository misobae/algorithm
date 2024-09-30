function solution(my_string, index_list) {
    let arr = [];
    for (let i = 0; i <= index_list.length; i++) {
        const indexNumber = index_list[i];
        arr.push(my_string[indexNumber])
    }
    
    return arr.join('');
}