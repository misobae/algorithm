function solution(k, score) {
    const topList = [];
    const result = [];
    
    for (let s of score) {
        topList.push(s);
        
        topList.sort((a, b) => b - a);
        if (topList.length > k) {
            topList.pop();
        }
        
        result.push(topList[topList.length - 1]);
    }
    
    return result;
}