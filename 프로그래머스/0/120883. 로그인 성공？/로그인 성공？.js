function solution(id_pw, db) {
    const [userId, userPw] = id_pw;
    
    for (const [id, pw] of db) {
        if (id === userId) {
            if (pw !== userPw) return 'wrong pw';
            return 'login';
        }
    }
  
  return 'fail';
}