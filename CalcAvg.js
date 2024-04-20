// Question:
// Write a function to calculate and return the average of the numbers given in an array.

// NOTE
// The array should be taken as input.
// Divide the sum by the total number of elements in the array to find the average.

// Solution
const calcAvg = (arr) => {
    // Calculate the sum of all elements in the array using reduce
    let total = arr.reduce((accum, curElem) => accum + curElem, 0);
    // Divide the sum by the total number of elements to find the average
    return total / arr.length;
}

// Test the function with example inputs and log the results
console.log(calcAvg([5, 10, 6, 4]));  // Output: 6.25
console.log(calcAvg([2, 20, 5, 1]));  // Output: 7
console.log(calcAvg([6, 16, 6, 3]));  // Output: 7.25
