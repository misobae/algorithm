function solution(picture, k) {
    return picture.map(row => row.split("").map(char => char.repeat(k)).join("")).flatMap(row => Array(k).fill(row));
}