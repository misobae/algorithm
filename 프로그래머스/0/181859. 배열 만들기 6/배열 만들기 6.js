function solution(arr) {
    const stk = arr.reduce((acc, curr) => {
        if (acc.length === 0 || acc[acc.length - 1] !== curr) {
            acc.push(curr);
        } else {
            acc.pop();
        }
        return acc;
    }, []);

    return stk.length === 0 ? [-1] : stk;
}