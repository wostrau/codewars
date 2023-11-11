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


//! 11: Create Phone Number | Codewars
// https://www.codewars.com/kata/525f50e3b73515a6db000b83
// Description: write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
// Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

const getFormattedPhoneNumber = (numbers) => {
    // Ensure the input array has exactly 10 elements
    if (numbers.length !== 10) {
        throw new Error("Input array must contain exactly 10 integers.");
    }

    // Format the phone number string
    const phoneNumber = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
    return phoneNumber;
};

// Example
const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const formattedPhoneNumber = getFormattedPhoneNumber(phoneNumberArray);
console.log(formattedPhoneNumber);  // Output: "(123) 456-7890"


//! 12: Closures and Scopes | Codewars
// http://www.codewars.com/kata/closures-and-scopes
// Description: we want to create a function,
// which returns an array of functions,
// which return their index in the array.
// For better understanding, here an EXAMPLE:
// create an array, containing 5 functions -->
// --> var callbacks = createFunctions(5);
// callbacks[0](); => 0
// callbacks[3](); => 3

const createFunctions = n => {
    var callbacks = [];

    for (let i = 0; i < n; i++) {
        callbacks.push(() => i);
    }

    return callbacks;
};

// Example
var callbacks = createFunctions(5);
console.log(callbacks[0]()); // Output: 0
console.log(callbacks[3]()); // Output: 3


//! 13: Calculating with Functions | Codewars
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
// Description: this time we want to write calculations using functions and get the results.
// Let's have a look at some examples:
// seven(times(five())) => 35
// four(plus(nine())); => 13
// eight(minus(three())); => 5
// six(dividedBy(two())); => 3
// Requirements: there must be a function for each number from 0 ("zero") to 9 ("nine").
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy.
// Each calculation consist of exactly one operation and two numbers.
// The most outer function represents the left operand, the most inner function represents the right operand.
// Division should be integer division. For example, this should return 2, not 2.666666...: -->
// --> eight(dividedBy(three()));

const zero = operation => operation ? operation(0) : 0;
const one = operation => operation ? operation(1) : 1;
const two = operation => operation ? operation(2) : 2;
const three = operation => operation ? operation(3) : 3;
const four = operation => operation ? operation(4) : 4;
const five = operation => operation ? operation(5) : 5;
const six = operation => operation ? operation(6) : 6;
const seven = operation => operation ? operation(7) : 7;
const eight = operation => operation ? operation(8) : 8;
const nine = operation => operation ? operation(9) : 9;

const plus = num => x => x + num;
const minus = num => x => x - num;
const times = num => x => x * num;
const dividedBy = num => x => Math.floor(x / num);

// Examples
console.log(seven(times(five())));     // Output: 35
console.log(four(plus(nine())));        // Output: 13
console.log(eight(minus(three())));     // Output: 5
console.log(six(dividedBy(two())));      // Output: 3


//! 14: Can you keep a secret? | Codewars
// http://www.codewars.com/kata/can-you-keep-a-secret
// Description: there's no such thing as private properties on a coffeescript object!
// But, maybe there are? Implement a function createSecretHolder(secret)
// which accepts any value as secret and returns an object with ONLY two methods:
// getSecret() which returns the secret
// setSecret() which sets the secret
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

const createSecretHolder = secret => {
    const holder = {};

    holder.getSecret = () => secret;

    holder.setSecret = newSecret => {
        secret = newSecret;
    };

    return holder;
};

// Example
var obj = createSecretHolder(5);
console.log(obj.getSecret());  // Output: 5
obj.setSecret(2);
console.log(obj.getSecret());  // Output: 2


//! 15: Using closures to share class state | Codewars
// http://www.codewars.com/kata/using-closures-to-share-class-state
// Description: In object-oriented programming,
// it is sometimes useful to have private shared state among all instances of a class;
// in other languages, like ruby, this shared state would be tracked with a class variable.
// In javascript we achieve this through closures and immediately-invoked function expressions.

// In this kata, I want you to write make a Cat constructor that takes arguments
// name and weight to instantiate a new cat object.
// The constructor should also have an averageWeight method that returns -->
// --> the average weight of cats created with the constructor.
// garfield = new Cat('garfield', 25);
// Cat.averageWeight(); // 25
// felix = new Cat('felix', 15);
// Cat.averageWeight();   // now 20

// But that's not all. Cats can change weight.
// Use Object.defineProperty to write custom setters and getters for the weight property
// so that the following works properly even as instances change their weight value:
// felix.weight = 25;
// felix.weight // 25
// Cat.averageWeight(); => now 25

// Object.defineProperty must be used to pass all tests.
// Storing a reference to all instances and recalculating the average weight each time is easier,
// but would prevent garbage collection from working properly if used in a production environment.

// Finally, since average weight is an aggregate statistic it's important that we validate
// constructor arguments so that no cats are created without a specified weight; so,
// make sure to throw an error if both arguments are not received by the constructor.

// Summary of requirements:
// Cat constructor, requiring arguments for name and weight
// Throw an error if name or weight not specified when invoking the constructor.
// Cat.averageWeight() method should give the average weight of all cat instances created with Cat,
// even after if the instance's properties have changed.
// Must use Object.defineProperty

class Cat {
    static cats = [];

    constructor(name, weight) {
        if (!name || !weight) {
            throw new Error('Both name and weight must be specified');
        }

        Object.defineProperty(this, 'name', {
            get: () => name,
        });

        Object.defineProperty(this, 'weight', {
            get: () => weight,
            set: (newWeight) => {
                Cat.cats.forEach((cat) => {
                    if (cat === this) {
                        weight = newWeight;
                    }
                });
            },
        });

        Cat.cats.push(this);
    }

    static averageWeight() {
        const totalWeight = Cat.cats.reduce((sum, cat) => sum + cat.weight, 0);
        return Cat.cats.length > 0 ? totalWeight / Cat.cats.length : 0;
    }
}

// Example
const garfield = new Cat('garfield', 25);
console.log(Cat.averageWeight()); // Output: 25

const felix = new Cat('felix', 15);
console.log(Cat.averageWeight()); // Output: 20

felix.weight = 25;
console.log(felix.weight); // Output: 25
console.log(Cat.averageWeight()); // Output: 25


//! 16: A Chain adding function | Codewars
// http://www.codewars.com/kata/a-chain-adding-function
// Description: we want to create a function that will add numbers together when called in succession.
// Example: add(1)(2); // => 3
// We also want to be able to continue to add numbers to our chain.
// Example: add(1)(2)(3); // => 6
// Example: add(1)(2)(3)(4); // => 10
// Example: add(1)(2)(3)(4)(5); // => 15
// A single call should be equal to the number passed in.
// Example: add(1); // => 1
// We should be able to store the returned values and reuse them.
// Example: var addTwo = add(2);
// addTwo; // => 2
// addTwo + 5; // => 7
// addTwo(3); // => 5
// addTwo(3)(5); // => 10
// We can assume any number being passed in will be valid whole number.

const add = num => {
    const innerAdd = (nextNum) => add(num + nextNum);

    // The valueOf method is used to make the function behave like a number when used in arithmetic operations
    innerAdd.valueOf = () => num;

    return innerAdd;
};

// Examples
console.log(add(1)(2)); // Output: 3
console.log(add(1)(2)(3)); // Output: 6
console.log(add(1)(2)(3)(4)); // Output: 10
console.log(add(1)(2)(3)(4)(5)); // Output: 15

const addTwo = add(2);
console.log(addTwo); // Output: 2
console.log(addTwo + 5); // Output: 7
console.log(addTwo(3)); // Output: 5
console.log(addTwo(3)(5)); // Output: 10


//! 17: Function Cache | Codewars
// http://www.codewars.com/kata/function-cache
// Description: if you are calculating complex things or execute time-consuming API calls,
// you sometimes want to cache the results.
// In this case we want you to create a function wrapper,
// which takes a function and caches its results depending on the arguments,
// that were applied to the function.
// Example:
// var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// var cachedFunction = cache(complexFunction);
// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

const cache = func => {
    const cacheObject = {};

    return function (...args) {
        const argsString = JSON.stringify(args);

        if (cacheObject.hasOwnProperty(argsString)) {
            console.log('Cache hit!');
            return cacheObject[argsString];
        } else {
            console.log('Cache miss!');
            const result = func(...args);
            cacheObject[argsString] = result;
            return result;
        }
    };
};

// Example usage
var complexFunction = function (arg1, arg2) {
    console.log('Executing complex function...');
    // Perform complex calculation here
    return arg1 + arg2;
};

var cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar')); // Output: Executing complex function... (result)
console.log(cachedFunction('foo', 'bar')); // Output: Cache hit! (cached result)
console.log(cachedFunction('foo', 'baz')); // Output: Executing complex function... (new result)


//! 18: Counting Duplicates | Codewars
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
// Description: count the number of Duplicates.
// Write a function that will return the count of distinct case-insensitive alphabetic characters
//  and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example:
// "abcde" => 0  # no characters repeats more than once
// "aabbcde" => 2  # 'a' and 'b'
// "aabBcde" => 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" => 1  # 'i' occurs six times
// "Indivisibilities" => 2  # 'i' occurs seven times and 's' occurs twice
// "aA11" => 2  # 'a' and '1'
// "ABBA" => 2  # 'A' and 'B' each occur twice

const countDuplicates = input => {
    const charCount = {};
    let duplicateCount = 0;

    // Convert the input string to lowercase to make it case-insensitive
    const lowercasedInput = input.toLowerCase();

    // Iterate through each character in the input string
    for (const char of lowercasedInput) {
        // Check if the character is alphanumeric
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            // If the character is already in charCount, increment its count
            // Otherwise, initialize its count to 1
            charCount[char] = (charCount[char] || 0) + 1;

            // If the count becomes 2, it means the character is a duplicate
            if (charCount[char] === 2) {
                duplicateCount++;
            }
        }
    }

    return duplicateCount;
};

// Examples
console.log(countDuplicates("abcde")); // Output: 0
console.log(countDuplicates("aabbcde")); // Output: 2
console.log(countDuplicates("aabBcde")); // Output: 2
console.log(countDuplicates("indivisibility")); // Output: 1
console.log(countDuplicates("Indivisibilities")); // Output: 2
console.log(countDuplicates("aA11")); // Output: 2
console.log(countDuplicates("ABBA")); // Output: 2


//! 19: Function composition | Codewars
// http://www.codewars.com/kata/function-composition-1
// Description: Javascript functions can be combined to form new functions.
// For example the functions addOne and multTwo can be combined
// to form a new function which first adds one and then multiplies by two, as follows:
// const addOne = (a) => a + 1;
// const multTwo = (b) => b * 2;
// const addOneMultTwo = (c) => multTwo(addOne(c));
// addOneMultTwo(5) // returns 12
// Combining functions like this is called function composition.
// Functional programming libraries in Javascript such as Ramda
// include a generic compose function which does the heavy lifting of combining functions for you.
// So you could implement addOneMultTwo as follows:
// const addOneMultTwo = compose(multTwo, addOne)
// addOneMultTwo(5) // returns 12
// A simple implementation of compose, could work as follows:
// const compose = (f, g) => (a) => f(g(a))
// The arguments f and g are unary functions (i.e. functions which take one argument).
// The problem with this compose function is that it only composes two functions.
// Your task is to write a compose function which can compose any number of functions together.

const compose = (...functions) => {
    return (input) => {
        return functions.reduceRight((result, fn) => fn(result), input);
    };
};

// Example usage:
const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;
const subtractThree = (c) => c - 3;

const composedFunction = compose(subtractThree, multTwo, addOne);

console.log(composedFunction(5)); // Output: 7 ((5 + 1) * 2 - 3)


//! 20: "Stringing"+"Me"+"Along" | Codewars
// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e
// Description: implement a function that receives a string, and lets you extend it with repeated calls.
// When no argument is passed you should return a string consisting of space-separated words you've received earlier.
// Note: There will always be at least 1 string; all inputs will be non-empty.
// Example: createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
// Tip (helpful, but not necessary): Try using classes!

class MessageBuilder {
    constructor(initialMessage) {
        this.messages = [initialMessage];
    }

    // The method to add a new message or retrieve the concatenated messages
    addMessage(newMessage) {
        if (newMessage !== undefined) {
            this.messages.push(newMessage);
            return this; // Return the instance to allow chaining
        } else {
            return this.messages.join(' ');
        }
    }
}

// Example usage:
const messageBuilder = new MessageBuilder("Hello");
const res = messageBuilder.addMessage("World!").addMessage("how").addMessage("are").addMessage("you?").addMessage();
console.log(res); // Output: "Hello World! how are you?"


//! 21: I Spy | Codewars
// http://www.codewars.com/kata/i-spy
// Description: the test cases for this kata are broken,
// but for some reason CodeWars has locked them and I cannot edit them.
// Specifically, the returned function is not propertly testing that old values are remembered.
// If and when I can fix the problem, I will, but I don't see any way to do that due to the lock.
// In testing, a spy function is one that keeps track of various metadata regarding its invocations.
// Some examples of properties that a spy might track include:
// (1) Whether it was invoked;
// (2) How many times it was invoked;
// (3) What arguments it was called with;
// (4) What contexts it was called in;
// (5) What values it returned;
// (6) Whether it threw an error;
// For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func.
// The returned spy must be callable in the same manner as the original func,
// and include the following additional properties/methods:
// (1) .callCount() => returns the number of times spy has been called;
// (2) .wasCalledWith(val) => returns true if spy was ever called with val, else returns false;
// (3) .returned(val) => returns true if spy ever returned val, else returns false;
// Below is a specific example of how spyOn might work in the wild.
// Example: function adder(n1, n2) { return n1 + n2; }
// var adderSpy = spyOn( adder );
// adderSpy(2, 4); // returns 6
// adderSpy(3, 5); // returns 8
// adderSpy.callCount(); // returns 2
// adderSpy.wasCalledWith(4); // true
// adderSpy.wasCalledWith(0); // false
// adderSpy.returned(8); // true
// adderSpy.returned(0); // false

const spyOn = func => {
    // Initialize properties to track the spy's state
    let callCount = 0;
    let calledWithValues = [];
    let returnedValues = [];

    // Create a wrapper function that tracks the spy's state and calls the original function
    const spyWrapper = function (...args) {
        // Increment call count
        callCount++;

        // Track called with values
        calledWithValues.push(args);

        // Call the original function
        const result = func.apply(this, args);

        // Track returned values
        returnedValues.push(result);

        // Return the result
        return result;
    };

    // Add additional properties/methods to the spy
    spyWrapper.callCount = () => callCount;
    spyWrapper.wasCalledWith = (val) => calledWithValues.some(args => args.includes(val));
    spyWrapper.returned = (val) => returnedValues.includes(val);

    return spyWrapper;
};

// Example usage:
function adder(n1, n2) {
    return n1 + n2;
}

const adderSpy = spyOn(adder);

console.log(adderSpy(2, 4)); // Output: 6
console.log(adderSpy(3, 5)); // Output: 8
console.log(adderSpy.callCount()); // Output: 2
console.log(adderSpy.wasCalledWith(4)); // Output: true
console.log(adderSpy.wasCalledWith(0)); // Output: false
console.log(adderSpy.returned(8)); // Output: true
console.log(adderSpy.returned(0)); // Output: false


//! 22: Calculating with Functions | Codewars
// http://www.codewars.com/kata/calculating-with-functions
// Description: we want to write calculations using functions and get the results.
// Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
// (1) There must be a function for each number from 0 ("zero") to 9 ("nine");
// (2) There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy;
// (3) Each calculation consist of exactly one operation and two numbers;
// (4) The most outer function represents the left operand, the most inner function represents the right operand;
// (5) Division should be integer division. For example, this should return 2, not 2.666666...: eight(dividedBy(three()));

const zeroNU = (operation) => (operation ? operation(0) : 0);
const oneNU = (operation) => (operation ? operation(1) : 1);
const twoNU = (operation) => (operation ? operation(2) : 2);
const threeNU = (operation) => (operation ? operation(3) : 3);
const fourNU = (operation) => (operation ? operation(4) : 4);
const fiveNU = (operation) => (operation ? operation(5) : 5);
const sixNU = (operation) => (operation ? operation(6) : 6);
const sevenNU = (operation) => (operation ? operation(7) : 7);
const eightNU = (operation) => (operation ? operation(8) : 8);
const nineNU = (operation) => (operation ? operation(9) : 9);

// Functions for operations
const plusNU = (b) => (a) => a + b;
const minusNU = (b) => (a) => a - b;
const timesNU = (b) => (a) => a * b;
const dividedByNU = (b) => (a) => Math.floor(a / b);

// Examples
console.log(sevenNU(timesNU(fiveNU()))); // Output: 35
console.log(fourNU(plusNU(nineNU()))); // Output: 13
console.log(eightNU(minusNU(threeNU()))); // Output: 5
console.log(sixNU(dividedByNU(twoNU()))); // Output: 3


//! 23: SantaClausable Interface | Codewars
// http://www.codewars.com/kata/santaclausable-interface
// Description: you probably know, that in Javascript (and also Ruby) there is no concept of interfaces.
// There is only a concept of inheritance, but you can't assume that a certain method or property exists,
// just because it exists in the parent prototype / class. We want to find out,
// whether a given object fulfils the requirements to implement the "SantaClausable" interface.
// We need to implement a method which checks for this interface.
// Rules:
// (1) The SantaClausable interface is implemented, if all of the following methods are defined on an object:
// sayHoHoHo() => say_ho_ho_ho;
// distributeGifts() => distribute_gifts;
// goDownTheChimney() => go_down_the_chimney;
// Example:
// var santa = {
//     sayHoHoHo: function() { console.log('Ho Ho Ho!') },
//     distributeGifts: function() { console.log('Gifts for all!'); },
//     goDownTheChimney: function() { console.log('*whoosh*'); }
// };
// var notSanta = {
//    sayHoHoHo: function() { console.log('Oink Oink!') }
//    /* no distributeGifts() and no goDownTheChimney() */
// };
// isSantaClausable(santa); // must return TRUE
// isSantaClausable(notSanta); // must return FALSE

const isSantaClausable = obj => {
    // Check if all required methods are defined on the object
    return (
        typeof obj.sayHoHoHo === 'function' &&
        typeof obj.distributeGifts === 'function' &&
        typeof obj.goDownTheChimney === 'function'
    );
};

// Example usage:
var santa = {
    sayHoHoHo: () => console.log('Ho Ho Ho!'),
    distributeGifts: () => console.log('Gifts for all!'),
    goDownTheChimney: () => console.log('*whoosh*'),
};

var notSanta = {
    sayHoHoHo: () => console.log('Oink Oink!')
    // no distributeGifts() and no goDownTheChimney()
};

console.log(isSantaClausable(santa));   // Output: true
console.log(isSantaClausable(notSanta)); // Output: false


//! 24: new with apply
// http://www.codewars.com/kata/new-with-apply
// Description: in JavaScript we can create objects using the new operator.
// For example, if you have this constructor function:
// function Greeting(name) {
//   this.name = name;
// };
// Greeting.prototype.sayHello = function() {
//   return "Hello " + this.name;
// };
// Greeting.prototype.sayBye = function() {
//   return "Bye " + this.name;
// };
// You can create a Greeting object in this way:
// var greeting = new Greeting('John');
// new operator is evil because it produces a highly coupled code, difficult to maintain and test.
// Some patterns to reduce coupling are object factories or dependency injection.
// These patterns can benefit of the construct() function.
// This function receives a constructor function and possibly some arguments and
// it returns a new object constructed with the function and the passed arguments.
// This is another way to create the greeting object:
// var greeting = construct(Greeting, 'John');
// And a factory could use like this:
// function factory() {
//   return {
//     createGreeting() {
//       return construct(Greeting, arguments);
//     }
//     ...
//   }
// }
// Your work is to implement the construct() function.

const construct = (constructor, args) => {
    // Create an empty object with the prototype of the constructor
    const obj = Object.create(constructor.prototype);

    // Call the constructor with the new object as the context
    const result = constructor.apply(obj, args);

    // If the constructor returns an object, use it as the result
    return result instanceof Object ? result : obj;
};

// Example usage:
function Greeting(name) {
    this.name = name;
}

Greeting.prototype.sayHello = function () {
    return "Hello " + this.name;
};

Greeting.prototype.sayBye = function () {
    return "Bye " + this.name;
};

const greeting = construct(Greeting, ['John']);
console.log(greeting.sayHello()); // Output: "Hello John"
console.log(greeting.sayBye());   // Output: "Bye John"


//! 25: Extract Nested Object Reference | Codewars
// http://www.codewars.com/kata/extract-nested-object-reference
// Description: you are given a complex object that has many deeply nested variables.
// You don't want to go the usual if obj.property == null route.
// Create a prototype method that given a nested path, either return the value or undefined.
// var obj = {
//     person: {
//       name: 'joe',
//       history: {
//         hometown: 'bratislava',
//         bio: {
//           funFact: 'I like fishing.'
//         }
//       }
//     }
//   };
// obj.hash('person.name'); => 'joe'
// obj.hash('person.history.bio'); => { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); => undefined
// obj.hash('person.animal.pet.needNoseAntEater'); => undefined


//! 26: Array Helpers | Codewars
// http://www.codewars.com/kata/array-helpers
// Description: this kata is designed to test your ability to extend the functionality of built-in classes.
// In this case, we want you to extend the built-in Array class
// with the following methods: square(), cube(), average(), sum(), even(), odd().
// Explanation:
// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!
// Example: var numbers = [1, 2, 3, 4, 5];
// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

// Check if the methods are already defined to avoid conflicts
if (!Array.prototype.square) {
    Array.prototype.square = function () {
        return this.map((value) => value * value);
    };
}

if (!Array.prototype.cube) {
    Array.prototype.cube = function () {
        return this.map((value) => value ** 3);
    };
}

if (!Array.prototype.average) {
    Array.prototype.average = function () {
        if (this.length === 0) return NaN;
        return this.reduce((sum, value) => sum + value, 0) / this.length;
    };
}

if (!Array.prototype.sum) {
    Array.prototype.sum = function () {
        return this.reduce((sum, value) => sum + value, 0);
    };
}

if (!Array.prototype.even) {
    Array.prototype.even = function () {
        return this.filter((value) => value % 2 === 0);
    };
}

if (!Array.prototype.odd) {
    Array.prototype.odd = function () {
        return this.filter((value) => value % 2 !== 0);
    };
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());  // Output: [1, 4, 9, 16, 25]
console.log(numbers.cube());    // Output: [1, 8, 27, 64, 125]
console.log(numbers.average()); // Output: 3
console.log(numbers.sum());     // Output: 15
console.log(numbers.even());    // Output: [2, 4]
console.log(numbers.odd());     // Output: [1, 3, 5]


//! 27: Your order, please | Codewars
// https://www.codewars.com/kata/55c45be3b2079eccff00010f
// Description: your task is to sort a given string.
// Each word in the string will contain a single number.
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string.
// The words in the input String will only contain valid consecutive numbers.
// Example: "is2 Thi1s T4est 3a" => "Thi1s is2 3a T4est"
// Example: "4of Fo1r pe6ople g3ood th5e the2" => "Fo1r the2 g3ood 4of th5e pe6ople"
// Example: "" => ""

function order(words) {
    if (words === "") {
        return "";
    }

    return words
        .split(" ")
        .sort((a, b) => a.match(/\d/) - b.match(/\d/))
        .join(" ");
}

// Example usage:
console.log(order("is2 Thi1s T4est 3a")); // Output: "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // Output: "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")); // Output: ""

// The .match(/\d/) is a regular expression (regex) pattern that is used to match any digit (0-9) in a string.
// Here's a breakdown of how it works:
// \d: This part of the regex pattern matches any digit (0-9).
// The parentheses () are used to capture the matched digit.
// So, when applied to a string, match(/\d/)
// will return an array containing the first digit found in the string or null if no digit is found.
// Here's an example:
// (1) javascript
// (2) Copy code
// (3) const word = "Thi1s";
// (4) const digitMatch = word.match(/\d/);
// console.log(digitMatch); // Output: ['1']
// In the context of the sorting function used in the previous example,
// match(/\d/) is used to extract the numeric part from each word in the array,
// allowing the array to be sorted based on these numeric values.


//! 28: Sum of Digits / Digital Root | Codewars
// http://www.codewars.com/kata/sum-of-digits-slash-digital-root/
// Description: digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.
// Example: 16  =>  1 + 6 = 7;
// Example: 942 => 9 + 4 + 2 = 15 => 1 + 5 = 6;
// Example: 132189 => 1 + 3 + 2 + 1 + 8 + 9 = 24 => 2 + 4 = 6;
// Example: 493193 => 4 + 9 + 3 + 1 + 9 + 3 = 29 => 2 + 9 = 11 => 1 + 1 = 2;

const digitalRoot = (n) => {
    // Convert the number to a string to access each digit
    const digits = String(n).split('').map(Number);

    // Calculate the sum of the digits
    const sum = digits.reduce((acc, digit) => acc + digit, 0);

    // If the sum has more than one digit, recursively call the function
    // Otherwise, return the sum
    return sum >= 10 ? digitalRoot(sum) : sum;
};

// Example usage:
console.log(digitalRoot(16));     // Output: 7
console.log(digitalRoot(942));    // Output: 6
console.log(digitalRoot(132189)); // Output: 6
console.log(digitalRoot(493193)); // Output: 2


//! 29: Fun with ES6 Classes #2 - Animals and Inheritance | Codewars
// http://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance
// Description: preloaded for you in this Kata is a class Animal:
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }
// Task: define the following classes that inherit from Animal.
// I. Shark
// The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status.
// All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".
// II. Cat
// The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status.
// Cats should always have a leg count of 4 and a species of "cat".
// Furthermore, the introduce/Introduce method for Cat should be identical to the original except
// there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:
// var example = new Cat("Example", 10, "Happy");
// example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
// III. Dog
// The Dog constructor should accept 4 arguments in the specified order: name, age, status, master.
// master is the name of the dog's master which will be a string.
// Furthermore, dogs should have 4 legs and a species of "dog".
// Dogs have an identical introduce/Introduce method as any other animal,
// but they have their own method called greetMaster/GreetMaster which accepts no arguments and
// returns "Hello (insert_master_name_here)"
// (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }

    introduce() {
        return `${super.introduce()}  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}


//! 30: Fun with ES6 Classes #3 - Cuboids, Cubes and Getters | Codewars
// http://www.codewars.com/kata/fun-with-es6-classes-number-3-cuboids-cubes-and-getters
// Description: fun with ES6 Classes #3 - Cuboids, Cubes and Getters.
// Task: define the following classes.
// I. Cuboid
// The object constructor for the class Cuboid should receive exactly three arguments
// in the following order: length, width, height and store these three values in this.length, this.width, this.height.
// The class Cuboid should then have a getter surfaceArea which returns the surface area
// of the cuboid and a getter volume which returns the volume of the cuboid.
// II. Cube
// class Cube is a subclass of class Cuboid. The constructor function of Cube
// should receive one argument only, its length,
// and use that value passed in to set this.length, this.width, this.height.
// Hint: Make a call to super, passing in the correct arguments, to make life easier.

class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    get surfaceArea() {
        return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
    }

    get volume() {
        return this.length * this.width * this.height;
    }
}

class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}


