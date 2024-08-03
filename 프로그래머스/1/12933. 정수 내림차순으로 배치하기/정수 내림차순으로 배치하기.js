function solution(n) {
    const sortedNum = Number(n.toString().split('').sort((a, b) => b - a).join(''));
    
    return sortedNum;
}