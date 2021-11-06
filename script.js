'use strict';

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