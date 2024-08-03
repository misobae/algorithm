function solution(n){
    const arr = n.toString().split('');
    const sum = arr.reduce((acc, cur) => acc + Number(cur), 0);

    return sum;
}