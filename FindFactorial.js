// Question:
// Write a function that takes a non-negative number as input and returns its factorial.

// NOTE
// The factorial of n will be: n * (n-1) * (n-2) * ....... * 3 * 2 * 1

// Solution

const findFactorial = (num) => {
    // Initialize the factorial variable to store the result
    let fact = 1;
    // Loop through each number from 1 to num and calculate the factorial
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    // Return the factorial
    return fact;
}

// Test the function with example inputs and log the results
console.log(findFactorial(2));  // Output: 2
console.log(findFactorial(4));  // Output: 24
console.log(findFactorial(5));  // Output: 120

