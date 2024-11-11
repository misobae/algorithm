function solution(num_list, n) {
    let movedArr = num_list.splice(n);
    
    return [...movedArr, ...num_list];
}