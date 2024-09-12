function solution(num_list) {
    const multiplication = num_list.reduce((acc, cur) => acc * cur, 1);
    const sum = num_list.reduce((acc, cur) => acc + cur, 0);
    
    return multiplication < sum ** 2 ? 1 : 0;
}