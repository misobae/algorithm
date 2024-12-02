function solution(myString, pat) {
    let counter = 0;
    let index = myString.indexOf(pat);
    
    while (index !== -1) {
        counter++;
        index = myString.indexOf(pat, index + 1);
    }
    
    return counter;
}