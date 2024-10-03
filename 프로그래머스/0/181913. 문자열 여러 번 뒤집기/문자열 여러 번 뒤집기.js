function solution(my_string, queries) {
    let arr = my_string.split('');
    
    queries.forEach((query) => {
        let [s, e] = query;
        let reversedWord = arr.slice(s, e + 1).reverse();
        arr.splice(s, e - s + 1, ...reversedWord)
    })
    
    return arr.join('')
}