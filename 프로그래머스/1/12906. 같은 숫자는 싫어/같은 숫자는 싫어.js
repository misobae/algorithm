function solution(arr) {
    return arr.reduce((acc, cur, i) => {
        if (cur !== arr[i + 1]) acc.push(cur);
        return acc;
    }, []);
}