// Question:
// Write a function that takes an input num and returns true when the given input value is a power of two,
// otherwise return false.

// NOTE
// The input will be a positive integer.
// The output should be either true or false.
// You have to use BITWISE operator to solve this problem.

// Solution

const isPowerofTwo = (num) => {
    // Check if the number is greater than 0 and if the bitwise AND of the number and (number - 1) is 0
    if (num > 0 && (num & (num - 1)) == 0) {
        return true; // If the conditions are met, the number is a power of two
    } else {
        return false; // Otherwise, it's not a power of two
    }
}

// Test the function with example inputs and log the results
console.log(isPowerofTwo(8));  // Output: true
console.log(isPowerofTwo(9));  // Output: false
console.log(isPowerofTwo(32)); // Output: true

