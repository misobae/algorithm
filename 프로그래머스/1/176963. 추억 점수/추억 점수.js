function solution(name, yearning, photo) {
    // 이름과 그리움 점수를 맵핑하고
    const yearningMap = {}
    for (let i = 0; i < name.length; i++) {
        yearningMap[name[i]] = yearning[i];
    }
   
    const result = [];
    
    // 각 사진에 맵핑한 이름이 있을 경우 점수 더하기
    for (let i = 0; i < photo.length; i++) {
        let score = 0;
        for (let j = 0; j < photo[i].length; j++) {
            const person = photo[i][j];
            if (yearningMap[person] !== undefined) {
                score += yearningMap[person];
            }
        }
        result.push(score);
    }
    
    return result;
}