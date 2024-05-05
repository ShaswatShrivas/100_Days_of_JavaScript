// Question:
// Write a function to check if a given string starts with a particular string.

// NOTE
// The input will be a string.
// The substring will be the string that either starts the input string or is any random word.

// Solution

// Method 1 - using built-in function.
// const checkString = (str1, str2) => {
//     return str1.toLowerCase().startsWith(str2);
// }
// console.log(checkString("Hello World", "Hello"))   // Output - true
// console.log(checkString("Hello World", "world"))   // Output - false
// console.log(checkString("Problem to check a substring", "problem"))   // Output - true

// NOTE - IN THIS METHOD IT IS NOT ABLE TO COMPARE THE ORIGINAL GIVEN STRING AND SUBSTRING AS IT CONVERTS THE
//        ACTUAL STRING TO lowercase.


// Method 2 - using slice function.
const checkString = (str1, str2) => {
    // Check if the substring of str1 starting from index 0 to the length of str2 is equal to str2
    return str1.slice(0, str2.length) === str2;
}

// Test the function with example inputs and log the results
console.log(checkString("Hello World", "Hello"));   // Output - true
console.log(checkString("Hello World", "world"));   // Output - false
console.log(checkString("Problem to check a substring", "problem"));   // Output - false

