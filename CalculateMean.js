// Question:
// Write a function to return the mean of the numbers present in an array.

// NOTE
// The input may contain positive and negative numbers.
// The output should return 0 if the input is empty or null.

// Solution

const calculateMean = (arr) => {
    // Check if the input array is empty or null
    if (arr.length === 0) return 0;
    // Calculate the sum of all elements in the array
    let sum = arr.reduce((accum, curElem) => accum + curElem, 0);
    // Calculate the mean by dividing the sum by the number of elements
    return sum / arr.length;
}

// Test the function with example inputs and log the results
console.log(calculateMean([-1, 2, 3, 21, 5]));  // Output: 6
console.log(calculateMean([10, 20, 30]));       // Output: 20
console.log(calculateMean([3, 3, 3, 3, 3]));    // Output: 3
