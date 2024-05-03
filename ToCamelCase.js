// Question:
// Write a function to convert a string into camelCase.

// Solution

const toCamelCase = (str) => {
    // Split the input string into an array of words
    str = str.trim().split(" ");
    // Convert the first word to lowercase and capitalize the first letter of subsequent words
    str = str.map((curElem, index) => {
        if (index === 0) {
            return curElem.toLowerCase();
        } else {
            return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
        }
    });
    // Join the words to form the camelCase string
    return str.join("");
};

// Test the function with example input and log the result
console.log(toCamelCase("This is a sample line")); // Output: thisIsASampleLine



// Code like a Pro!!! ---
// You can chain the code by removing of the words which act as a continuous implementation of code.
// const toCamelCase = (str) => {
//     return str
//         .trim()
//         .split(" ")
//         .map((CurElem, index) => {
//         if (index === 0){
//             return CurElem.toLowerCase();
//         }
//         else {
//             return CurElem.charAt(0).toUpperCase() + CurElem.slice(1).toLowerCase();
//         }
//
//     })
//     .join("");
// };