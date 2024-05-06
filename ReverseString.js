// Question:
// Write a function to return the reverse of the given input string.

// NOTE
// The input will be a string.
// You should not use any in-built functions to reverse the string.
// The output should be a string only.

// Solution

const reverseString = (str) => {
    let rev_str = ""; // Initialize an empty string to store the reversed string
    // Iterate through the input string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
        rev_str += str[i]; // Append each character to the reversed string
    }
    return rev_str; // Return the reversed string
}

// Test the function with example inputs and log the results
console.log(reverseString("hello"));             // Output: olleh
console.log(reverseString("Javascript"));        // Output: tpircsavaJ
console.log(reverseString("02 .on noitseuQ"));   // Output: Question no. 20
