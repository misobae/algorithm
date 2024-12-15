function solution(rny_string) {
    return rny_string.split('').map(x => x === 'm' ? 'rn' : x).join('');
}