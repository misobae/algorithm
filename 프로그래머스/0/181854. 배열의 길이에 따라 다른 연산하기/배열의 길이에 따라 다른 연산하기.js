function solution(arr, n) {
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr.length % 2 !== 0) {
            newArr.push(i % 2 === 0 ? arr[i] + n : arr[i]);
        } else {
            newArr.push(i % 2 !== 0 ? arr[i] + n : arr[i]);
        }
    }
    
    return newArr;
}