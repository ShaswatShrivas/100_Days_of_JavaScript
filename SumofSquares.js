// Question:
// Write a function to calculate the sum of squares of all elements in an array.
// For example - [1, 2, 3] will give output = 14 because ((1*1 + 2*2 + 3*3) = (1 + 4 + 9) = 14 )

// NOTE
// The input will be an array of positive integers.

// Solution

const sumofSquares = (arr) => {
    // Use the reduce method to calculate the sum of squares of all elements in the array
    return arr.reduce((accum, curVal) => accum + (curVal * curVal), 0);
}

// Test the function with example inputs and log the results
console.log(sumofSquares([1, 2, 3]));  // Output: 14
console.log(sumofSquares([2, 4, 5]));  // Output: 45
console.log(sumofSquares([1, 4, 8]));  // Output: 81
