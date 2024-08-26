function solution(str1, str2) {
    const result = [];
    const a = str1.split('');
    const b = str2.split('');
    
    for(let i = 0;i < a.length; i++) {
        if(i < a.length) {
            result.push(a[i]);
        }
        if(i < b.length) {
            result.push(b[i]);
        }
    }
    
    return result.join('');
}