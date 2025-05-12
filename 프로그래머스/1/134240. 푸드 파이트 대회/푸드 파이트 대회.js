function solution(food) {
    const arr = food.map((x) => Math.floor(x / 2)).slice(1);
    const left = [];

    for (let i = 0; i < arr.length; i++) {
        left.push(String(i + 1).repeat(arr[i]));
    }

    return left.join('') + '0' + [...left.join('')].reverse().join('');
}