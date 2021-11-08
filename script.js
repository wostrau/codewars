//'use strict';

// function getEvenNumbers(numbersArray){

//     return numbersArray.filter(function(value, index, array) {

//           if (value % 2 == 1) {
//               return false;
//           }
//           else {
//               return true;
//           }
//       })
// };

//   console.log(getEvenNumbers([2,4,5,6]));


//   function solution(string) {
//     let res = ""
//     let prevIndex = 0

//     for(let i = 0; i < string.length; i++) {
//         if(string[i] === string[i].toUpperCase()) {
//             res += string.slice(prevIndex, i) + " "
//             prevIndex = i
//         }
//     }
//     return res += string.slice(prevIndex)
// };

// console.log("camelCasingCaseCast");

// function findOdd(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         let numQty = 0;
//         arr.forEach(element => {
//             if(arr[i] === element) {
//                 numQty++
//             };
//         });
//         if(numQty % 2 === 1) {
//             return arr[i]
//         }
//     }
//     return 0;
//   }

// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));

// function factorial(num) {
//     let res = 1;
//     let int = num;

//     if (num < 0 || num > 12) {
//       throw RangeError;
//     } else if (num >= 3 && num <= 12) {
//         for (let i = 2; i <= int; i++) {
//             res *= i;
//         };
//         return res;
//     } else if (num === 0 || num === 1) {
//         return 1;
//     } else if (num === 2) {
//         return 2;
//     };
// };

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(13));
// console.log(factorial(-1));