function isNumeric(str) {
  return /^\d+$/.test(str);
}

function solution(s) {
    if (s.length === 4 || s.length === 6) {
        return isNumeric(s);
    }
    
    return false;
}