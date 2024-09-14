function solution(num_list) {
    const lastIndex = num_list.length - 1;
    const last = num_list[lastIndex];
    const secondLast = num_list[lastIndex - 1];
    
    last > secondLast
        ? num_list.push(last - secondLast)
        : num_list.push(last * 2);
    
    return num_list;
}