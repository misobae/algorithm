function solution(a, b) {
    let month = 1;
    let day = 1;
    let index = 5;
    const dow = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    const daysInMonth = (m) => {
        switch (m) {
            case 2:
                return 29;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
            default:
                return 31;
        }
    }
    
    while (month !== a || day !== b) {
        day++;
        index = (index + 1) % 7;

        if (day > daysInMonth(month)) {
            day = 1;
            month++;
        }
    }

    return dow[index];
}