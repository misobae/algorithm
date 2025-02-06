function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        const isAllOk = arr[i].every((x, j) => arr[i][j] === arr[j][i])
        
        return isAllOk ? 1 : 0;
    }
}