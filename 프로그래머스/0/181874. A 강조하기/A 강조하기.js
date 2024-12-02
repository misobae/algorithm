function solution(myString) {
    return myString.replace(/a/g, 'A').replace(/[B-Z]/g, (char) => char.toLowerCase());
}
