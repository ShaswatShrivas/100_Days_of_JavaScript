// Question:
// Write a function that takes the input and returns the sum of its digits.

// NOTE
// The input can have multiple digits.
// The input will always be positive.

// Solution

const sumofDigits = (num) => {
    // Convert the number to an array of its digits
    let arr = Array.from(String(num), Number);
    console.log(arr)
    // Calculate the sum of the digits using reduce
    return arr.reduce((accum, curElem) => accum += curElem, 0);
}

// Test the function with example inputs and log the results
console.log(sumofDigits(1234));   // Output: 10
console.log(sumofDigits(13234));  // Output: 13
console.log(sumofDigits(128764)); // Output: 28

