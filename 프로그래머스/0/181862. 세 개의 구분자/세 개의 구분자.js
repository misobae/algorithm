function solution(myStr) {
    const splitResult = myStr.split(/[abc]/);
    const filteredResult = splitResult.filter(x => x !== '');

    return filteredResult.length > 0 ? filteredResult : ["EMPTY"];
}