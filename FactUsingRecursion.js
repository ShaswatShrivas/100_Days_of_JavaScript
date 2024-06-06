// Question:
// Write a function to calculate the factorial of the given number using recursion.

// NOTE
// The input should be a positive number.

// Solution

const factUsingRecursion = (int) => {
    // Base case: if the integer is 1, return 1
    if (int === 1) {
        return 1;
    }
    // Recursive case: multiply the integer by the factorial of (integer - 1)
    else {
        return int * factUsingRecursion(int - 1);
    }
}

console.log(factUsingRecursion(5));  // Output - 120
console.log(factUsingRecursion(2));  // Output - 2
console.log(factUsingRecursion(6));  // Output - 720
