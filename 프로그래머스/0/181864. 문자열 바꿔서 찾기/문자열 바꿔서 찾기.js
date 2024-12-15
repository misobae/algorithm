function solution(myString, pat) {
    return myString.split('').map(x => x === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}