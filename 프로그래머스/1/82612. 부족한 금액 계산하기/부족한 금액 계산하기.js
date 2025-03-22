function solution(price, money, count) {
    const totalCost = price * (count * (count + 1)) / 2;
    return totalCost > money ? totalCost - money : 0;
}