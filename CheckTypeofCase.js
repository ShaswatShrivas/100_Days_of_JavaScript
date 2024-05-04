// Question:
// Write a function to check if a character is uppercase or lowercase.

// NOTE
// The input will be a string with a single character.
// Assume that the input string will be of length 1.
// Optimization of the function to handle edge cases should be efficient.

// Solution
const checkTypeofCase = (char) => {
    // Check if the character code falls within the range of uppercase letters in ASCII
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        return true; // If the character is uppercase, return true
    } else {
        return false; // Otherwise, return false
    }
}

// Test the function with example inputs and log the results
console.log(checkTypeofCase("s")); // Output: false
console.log(checkTypeofCase("D")); // Output: true
console.log(checkTypeofCase("A")); // Output: true
