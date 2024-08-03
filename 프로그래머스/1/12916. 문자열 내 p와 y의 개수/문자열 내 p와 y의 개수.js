function solution(s){
    const str = s.toLowerCase();
    let pCount = 0, yCount = 0;
    for (let char of str) {
        if (char === 'p') pCount++;
        else if (char === 'y') yCount++;
    }
  
    return pCount === yCount;
}