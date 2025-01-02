function solution(arr, flag) {
    let X = [];

    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            X.push(...Array(arr[i] * 2).fill(arr[i]));
        } else {
            X.splice(-arr[i]);
        }
    }

    return X;
}