function solution(num_list) {
    let even = '';
    let odd = '';

    num_list.forEach(el => {
        el % 2 === 0 ? even += el : odd += el;
    });

    return Number(even) + Number(odd);
}