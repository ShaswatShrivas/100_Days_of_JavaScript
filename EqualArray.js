// Question:
// Write a function that takes two inputs as arrays and returns true if those two arrays are equal.

// NOTE
// The two arrays should be taken as input.
// Return true only if they contain the same elements in the same order.
// Otherwise, return false.

// Solution

const equalArray = (arr1, arr2) => {
    // Check if the lengths of both arrays are equal
    if (arr1.length !== arr2.length) {
        return false;
    }
    // Use the every method to iterate through each element of the arrays and compare them
    return arr1.every((curVal, index) => curVal === arr2[index]);
}

// Test the function with example inputs and log the results
console.log(equalArray([1, 2, 3], [1, 2, 3])); // Output: true
console.log(equalArray([1, 2, 5], [1, 3, 3])); // Output: false
console.log(equalArray([7, 2, 4], [7, 2, 4])); // Output: true
