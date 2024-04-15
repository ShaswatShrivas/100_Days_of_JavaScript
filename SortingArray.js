// Question:
// Write a function to sort an array of numbers in increasing order.

// NOTE
// The function should take inputs from the user.
// The original array should remain unchanged.

// Solution
const SortingArray = (arr) => {
    // Sort the array in increasing order
    arr.sort((a, b) => a - b);
    // Return the sorted array
    return arr;
}

// Test the function with an example input and log the result
console.log(SortingArray([2, 4, 53, 5, 222]));
// Output: [2, 4, 5, 53, 222]
