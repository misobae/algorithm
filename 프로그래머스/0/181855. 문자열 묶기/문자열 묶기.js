function solution(strArr) {
    let lengthGroup = {};
    
    strArr.forEach(x => {
        const length = x.length;
        if (!lengthGroup[length]) {
            lengthGroup[length] = 1;
        } else {
            lengthGroup[length] = lengthGroup[length] + 1;
        }
    })
    
    return Math.max(...Object.values(lengthGroup));
}