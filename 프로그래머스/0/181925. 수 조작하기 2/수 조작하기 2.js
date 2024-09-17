function solution(numLog) {
    let str = '';
    
    for (let i = 0; i < numLog.length; i++) {
        const diff = numLog[i + 1] - numLog[i];
        if (diff === 1) {
            str += 'w';
        } else if (diff === -1) {
            str += 's';
        } else if (diff === 10) {
            str += 'd';
        } else if (diff === -10) {
            str += 'a';
        }
    }
    
    return str;
}