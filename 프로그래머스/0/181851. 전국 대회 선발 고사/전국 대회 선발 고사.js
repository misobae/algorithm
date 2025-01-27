function solution(rank, attendance) {
    let top3 = [];
    
    for (let i = 0; i < rank.length; i++) {
        if (attendance[i]) {
            top3.push([rank[i], i]);
        }
    }
    
    top3.sort((a, b) => a[0] - b[0]);
    
    return 10000 * top3[0][1] + 100 * top3[1][1] + top3[2][1];
}