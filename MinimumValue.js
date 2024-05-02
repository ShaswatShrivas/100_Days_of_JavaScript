// Question:
// Write a function that takes an array of numbers and finds the minimum value.

// NOTE
// The input can be an array of positive and negative integers.
// The input may be empty.
// The input array may contain duplicate values.

// Solution

const minimumValue = (arr) => {
    // Method 1: Using sort method
    arr = arr.sort((a, b) => a - b);
    return arr[0];

    // Method 2: Using Math.min and spread operator
    if (arr.length === 0) return "Empty Array";
    return Math.min(...arr);
}

// Test the function with example inputs and log the results
console.log(minimumValue([1, 2, 3, 4]));      // Output: 1
console.log(minimumValue([10, 22, -3, 42]));  // Output: -3
console.log(minimumValue([11, -22, 34, -4])); // Output: -22
