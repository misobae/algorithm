function solution(t, p) {
    let count = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        const sub = t.slice(i, i + p.length);
        if (Number(sub) <= Number(p)) count++;
    }

    return count;
}