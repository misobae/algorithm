function solution(n, arr1, arr2) {
  return arr1.map((num1, i) => {
    const binary = (num1 | arr2[i]).toString(2).padStart(n, '0');
    return binary.replace(/[01]/g, bit => (bit === '0' ? ' ' : '#'));
  });
}

// const decimalToBinary = (numbers, length) => {
//     return numbers.map((x) => x.toString(2).padStart(length, '0'))
// }

// function solution(n, arr1, arr2) {
//     let result = [];
    
//     const binaryArr1 = decimalToBinary(arr1, n);
//     const binaryArr2 = decimalToBinary(arr2, n);
    
//     binaryArr1.forEach((x, i) => {
//         let wholeBinaryArr = [];
        
//         x.split('').forEach((y, j) => {
//             if (y === '1' || binaryArr2[i][j] === '1') {
//                 wholeBinaryArr.push('1');
//             } else {
//                 wholeBinaryArr.push('0');
//             }
//         })
        
//         result.push(wholeBinaryArr.join(''));
//     })
    
//     return result.map((x) => x.replaceAll(0, ' ').replaceAll(1, '#'));
// }