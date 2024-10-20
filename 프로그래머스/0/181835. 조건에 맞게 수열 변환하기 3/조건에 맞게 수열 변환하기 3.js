function solution(arr, k) {
    return arr.map((el, idx) => k % 2 !== 0 ? el * k : el + k);
}