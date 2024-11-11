function solution(str_list) {
    let lIndex = -1;
    let rIndex = -1;

    for (let i = 0; i < str_list.length; i++) {
        if (str_list[i] === 'l' && lIndex === -1) {
            lIndex = i;
        } else if (str_list[i] === 'r' && rIndex === -1) {
            rIndex = i;
        }
    }

    if (lIndex === -1 && rIndex === -1) return [];

    if (lIndex !== -1 && (rIndex === -1 || lIndex < rIndex)) {
        return str_list.slice(0, lIndex);
    }

    if (rIndex !== -1) {
        return str_list.slice(rIndex + 1);
    }
}