function countCharacter(str, char) {
  const regex = new RegExp(char, 'gi');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
};

function solution(s){
    var answer = true;
    
    const regexP = countCharacter(s, 'p');
    const regexY = countCharacter(s, 'y');
    
    if (regexP !== regexY) {
        answer = false;
    } else {
        answer = true;
    }
    
    return answer;
}