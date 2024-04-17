// Question:
// Write a function to find the maximum number present in an array.

// NOTE
// It has to take the input from the user.

// Solution
const findMax = (arr) => {
    // Spread operator (...) is used to pass the elements of the array as arguments to Math.max()
    return Math.max(...arr);
}

// Test the function with example inputs and log the results
console.log(findMax([1, 3, 5, 2, 9]));       // Output: 9
console.log(findMax([-19, -9, -3, -5]));     // Output: -3
console.log(findMax([5]));                   // Output: 5
