function solution(a, b, c, d) {
    const numbers = [a, b, c, d].sort((x, y) => x - y);
    const [p, q, r, s] = numbers;


    if (p === q && q === r && r === s) {
        return 1111 * p;
    }

    
    else if (p === q && q === r) {
        return (10 * p + s) ** 2;
    }
    else if (p === q && p === s) {
        return (10 * p + r) ** 2;
    }
    else if (q === r && r === s) {
        return (10 * q + p) ** 2;
    }
  
    
    else if (p === q && r === s) {
        return (p + r) * Math.abs(p - r);
    }
    else if (p === r && q === s) {
        return (p + q) * Math.abs(p - q);
    }
    else if (p === s && q === r) {
        return (p + q) * Math.abs(p - q);
    }
  
    
    else if (p === q) {
        return r * s;
    }
    else if (p === r) {
        return q * s;
    }
    else if (p === s) {
        return q * r;
    }
    else if (q === r) {
        return p * s;
    }
    else if (q === s) {
        return p * r;
    }
    else if (r === s) {
        return p * q;
    }


    else {
        return p;
    }
}