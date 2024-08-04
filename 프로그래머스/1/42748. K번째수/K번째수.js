function solution(array, commands) {
    return commands.map(item => {
        const [i, j, k] = item;
        const slicedArr = array.slice(i - 1, j);
        const sortedArr = slicedArr.sort((a, b) => a - b);

        return sortedArr[k - 1];
    })
}