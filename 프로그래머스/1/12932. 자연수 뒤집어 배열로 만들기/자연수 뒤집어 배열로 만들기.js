function solution(n) {
    const arr = n.toString().split('');
    const numReverseArr = arr.map(Number).reverse(); 
    
    return numReverseArr;
}