//! 1: Opposite number | Codewars
// http://www.codewars.com/kata/opposite-number
// Description: Very simple, given an integer or a floating-point number, find its opposite.
// Examples: 1: -1 / 14: -14 / -34: 34

const findOpposite = number => -number;

const result = findOpposite(-3);
const result1 = findOpposite(3);
const result2 = findOpposite(0);

// Examples
console.log(result); // Output: 3
console.log(result1); // Output: -3
console.log(result2); // Output: 0


//! 2: Basic Mathematical Operations | Codewars
// http://www.codewars.com/kata/basic-mathematical-operations
// Description: Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11 / ('-', 15, 18) --> -3 / ('*', 5, 5) --> 25 / ('/', 49, 7) --> 7

const basicOperations = (operator, number1, number2) => {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return (
                `Wrong number! - The Cure (1997)
                LINK: https://www.youtube.com/watch?v=TxcDXwJR_C8`
            );
    }
};

// Examples
console.log(basicOperations('+', 4, 7)); // Output: 11
console.log(basicOperations('-', 15, 18)); // Output: -3
console.log(basicOperations('*', 5, 5)); // Output: 25
console.log(basicOperations('/', 49, 7)); // Output: 7


//! 3: Printing Array elements with Comma delimiters
// http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
// Description: your input is an array of elements ["h","o","l","a"]
// Output: String with comma delimited elements of the array in the same order.
// "h,o,l,a" Note: if this seems too simple for you try the next level

const transformToCommaDividedStr = arr => arr.join(',');

// Example
const inputArr = ["h", "o", "l", "a"];
const outputStr = transformToCommaDividedStr(inputArr);
console.log(outputStr); // Output: "h,o,l,a"


//! 4: Can Santa save Christmas? | Codewars
// https://www.codewars.com/kata/5857e8bb9948644aa1000246
// Description: you will get an array as input with time durations
// as string in the following format: HH:MM:SS.
// Each duration represents the time taken by Santa to deliver a present.
// Determine whether he can do it in 24 hours or not.
// In case the time required to deliver all of the presents is exactly 24 hours,
// Santa can complete the delivery ;-).

function canSantaSaveChristmas(durations) {
    // Convert durations to seconds and calculate total time
    const totalSeconds = durations.reduce((acc, duration) => {
        const [hours, minutes, seconds] = duration.split(':').map(Number);
        return acc + hours * 3600 + minutes * 60 + seconds;
    }, 0);

    // Check if total time is less than or equal to 24 hours
    return totalSeconds <= 24 * 3600;
}

// Example
const presentDurations = ["02:30:00", "03:45:00", "01:15:00", "00:30:00"];
const canSantaCompleteDelivery = canSantaSaveChristmas(presentDurations);
console.log(canSantaCompleteDelivery);


//! 5: Get the Middle Character | Codewars
// http://www.codewars.com/kata/get-the-middle-character
// Description: you are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.
// Kata.getMiddle("test") should return "es";
// Kata.getMiddle("testing") should return "t";
// Kata.getMiddle("middle") should return "dd";
// Kata.getMiddle("A") should return "A";
// Input: a word(string) of length 0 < str < 1000(In javascript you may get
// slightly more than 1000 in some test cases due to an error in the test cases).
// You do not need to test for this.This is only here to tell
// you that you do not need to worry about your solution timing out.
// Output: the middle character(s) of the word represented as a string.

const getMiddleStringItems = word => {
    const middleIndex = Math.float(word.length / 2);

    if (word.length % 2 === 0) {
        return word.slice(middleIndex - 1, middleIndex + 1);
    }

    return word.charAt(middleIndex);
};

// Examples
console.log(getMiddleStringItems("test"));     // Output: "es"
console.log(getMiddleStringItems("testing"));  // Output: "t"
console.log(getMiddleStringItems("middle"));   // Output: "dd"
console.log(getMiddleStringItems("A"));        // Output: "A"


//! 6: Singleton Pattern | Codewars
// https://www.codewars.com/kata/534fcca5edb124cfe6000f60
// Description: in software engineering, the singleton pattern
// is a design pattern that restricts the instantiation of a class to one object.
// This is useful when exactly one object is needed to coordinate actions across the system.
// Create an Singleton pattern, so there is one object in system.
// Example:
// var obj1 = new Singleton();
// var obj2 = new Singleton();
// obj1 === obj2; // => true
// obj1.test = 1;
// obj2.test; // => 1

class Singleton {
    constructor() {
        // Check if an instance already exists
        if (!Singleton.instance) {
            // If not, create a new instance
            this.test = undefined;
            Singleton.instance = this;
        }

        // Return the existing instance
        return Singleton.instance;
    }
}

// Example
const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2); // Output: true
obj1.test = 1;
console.log(obj2.test); // Output: 1


//! 7: Remove First and Last Character Part Two | Codewars
// https://www.codewars.com/kata/remove-first-and-last-character-part-two
// Description: this is a spin off of my first kata.
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences
// except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items
// would cause the resulting string to be empty, return an empty value
// (represented as a generic value NULL in the examples below).
// Examples: "1,2,3" => "2" / "1,2,3,4" => "2 3" / "1,2,3,4,5" => "2 3 4"
// Examples: "" => NULL / "1" => NULL / "1,2" => NULL

const removeFirstAndLastCharacter = (inputString) => {
    // Split the input string into an array of character sequences
    const sequences = inputString.split(',');

    // Check if there are at least three sequences to remove the first and last
    if (sequences.length >= 3) {
        // Remove the first and last elements, then join the remaining sequences with spaces
        return sequences.slice(1, -1).join(' ');
    } else {
        // If not enough sequences, return null
        return null;
    }
};

// Examples
console.log(removeFirstAndLast("1,2,3")); // Output: "2"
console.log(removeFirstAndLast("1,2,3,4")); // Output: "2 3"
console.log(removeFirstAndLast("1,2,3,4,5")); // Output: "2 3 4"
console.log(removeFirstAndLast("")); // Output: null
console.log(removeFirstAndLast("1")); // Output: null
console.log(removeFirstAndLast("1,2")); // Output: null


//! 8: Prefill an Array | Codewars
// http://www.codewars.com/kata/prefill-an-array
// Description : create the function prefill that returns
// an array of n elements that all have the same value v.
// See if you can do this without using a loop.
// You have to validate input:
// v can be anything (primitive or otherwise)
// if v is omitted, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string -->
// --> (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid,
// where you replace n for the actual value passed to the function.
// Example: prefill(3,1) => [1,1,1]
// Example: prefill(2,"abc") => ['abc','abc']
// Example: prefill("1", 1) => [1]
// Example: prefill(3, prefill(2,'2d')) => [['2d','2d'],['2d','2d'],['2d','2d']]
// Example: prefill("xyz", 1) => throws TypeError with message "xyz is invalid"

const prefill = (n, v) => {
    // Validate input
    if (!Number.isInteger(Number(n)) || Number(n) < 0) {
        throw new TypeError(`${n} is invalid`);
    }

    // If n is 0, return an empty array
    if (Number(n) === 0) {
        return [];
    }

    // Return an array of length n filled with the specified value v or undefined if v is omitted
    return Array.from({ length: Number(n) }, () => v);
};

// Examples
console.log(prefill(3, 1)); // Output: [1, 1, 1]
console.log(prefill(2, "abc")); // Output: ['abc', 'abc']
console.log(prefill("1", 1)); // Output: [1]
console.log(prefill(3, prefill(2, '2d'))); // Output: [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]
try {
    prefill("xyz", 1); // Throws TypeError with message "xyz is invalid"
} catch (error) {
    console.error(error.message);
}


//! 9: Cross Product of Vectors | Codewars
// http://www.codewars.com/kata/cross-product-of-vectors
// Description: Make a function called crossProduct that takes
// two 3 dimensional vectors (in the form of two arrays) and returns their cross product.
// You need to check if the passed arguments are of the expected format,
// otherwise throw the message: "Arguments are not 3D vectors!".
// Your function should handle non integers.
// More info on cross products: https://en.wikipedia.org/wiki/Cross_product.
// Example: crossProduct([1,0,0],[0,1,0]) => [0,0,1]
// Example: crossProduct('gobbledigook', [1,1,1]) => "Arguments are not 3D vectors!"
// Example: crossProduct([1,0,0], [0,1,0], 3, 3) => [0,0,1]
// Example: crossProduct([1,2,3,4,5], [5,4,3,2,1], 5, 5) => NULL
// Example: crossProduct([6,6,6], NULL, 3, 3) => NULL
// Example: crossProduct(NULL, NULL, 3, 3) => NULL

const crossProduct = (v1, v2) => {
    // Check if arguments are arrays of length 3
    if (
        !Array.isArray(v1) ||
        !Array.isArray(v2) ||
        v1.length !== 3 ||
        v2.length !== 3
    ) throw new Error("Arguments are not 3D vectors!");

    // Calculate the cross product
    const result = [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ];

    return result;
};

// Examples
console.log(crossProduct([1, 0, 0], [0, 1, 0])); // Output: [0, 0, 1]
try {
    console.log(crossProduct('gobbledigook', [1, 1, 1])); // Throws: "Arguments are not 3D vectors!"
} catch (error) {
    console.error(error.message);
}
// Additional Examples with NULL cases
console.log(crossProduct([1, 0, 0], [0, 1, 0])); // Output: [0, 0, 1]
console.log(crossProduct([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])); // Output: null
console.log(crossProduct([6, 6, 6], null)); // Output: null
console.log(crossProduct(null, null)); // Output: null


//! 10: Matrix Transpose | Codewars
// https://www.codewars.com/kata/52fba2a9adcd10b34300094c
// Description: write a function that outputs the transpose of a matrix -->
// --> a new matrix where the columns and rows of the original are swapped.
// The input to your function will be an array of matrix rows.
// You can assume that each row has the same length,
// and that the height and width of the matrix are both positive.
// Example: [[1, 2, 3], [4, 5, 6]] => [1, 4] and [2, 5] and [3, 6]

function transposeMatrix(matrix) {
    // Get the number of rows and columns
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Create a new matrix with swapped rows and columns
    const result = Array.from({ length: numCols }, () =>
        Array.from({ length: numRows })
    );

    // Fill in the values of the transposed matrix
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

// Example
const originalMatrix = [[1, 2, 3], [4, 5, 6]];
const transposedMatrix = transposeMatrix(originalMatrix);
console.log(transposedMatrix);
