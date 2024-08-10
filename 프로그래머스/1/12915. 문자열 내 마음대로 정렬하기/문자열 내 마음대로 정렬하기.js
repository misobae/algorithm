function solution(strings, n) {
    strings.sort((a, b) => {
        // n번째 문자를 기준으로 정렬하고
        const charA = a[n];
        const charB = b[n];
        if (charA < charB) return -1;
        if (charA > charB) return 1;

        // n번째 문자가 같을 경우, 사전순으로 앞선 문자열을 앞쪽에 정렬
        return a.localeCompare(b);
    });
    
    return strings;
}