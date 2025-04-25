function solution(d, budget) {
    let remainBudget = budget;
    let result = 0;
    
    for (const amount of d.sort((a, b) => a - b)) {
        if (amount > remainBudget) break;
        remainBudget -= amount;
        result += 1;
    }
    
    return result;
}