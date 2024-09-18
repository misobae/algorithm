function solution(arr, queries) {
    let result = [];
    
    for (let query of queries) {
        let [s, e, k] = query;
        
        // arr에서 s번째에서 e번째 배열 중 k보다 큰 값을 찾고, 그 중 k보다 큰 숫자
        const extractedArr = arr.slice(s, e + 1).filter(num => num > k);
        
        // extractedArr에서 가장 작은 숫자를 찾고, 없다면 -1
        if (extractedArr.length > 0) {
            result.push(Math.min(...extractedArr));
        } else {
            result.push(-1);
        }
    }
    
    return result;
}