// Question:
// Write a function to check whether a word is a palindrome or not.

// PALINDROME is a word, phrase, or number or other sequence of characters that if read backward and forward,
// it will be spelled the same.

// NOTE
// The function should be case-insensitive, i.e., "Racecar" and "racecar" should be considered the same.
// Spaces should be ignored while checking whether the string is a palindrome or not.
// The function should return true if the string is a palindrome.

// Solution

const palindromeChecker = (str) => {
    // Convert the string to lowercase and remove non-word characters
    str = str.toLowerCase().replace(/\W/g, "");
    // Reverse the string
    let reversedStr = str.split("").reverse().join("");
    // Check if the original string is equal to the reversed string
    return str === reversedStr ? true : false;
}

// Test the function with example inputs and log the results
console.log(palindromeChecker("a man, a plan, a canal, Panama")) // Output: true
console.log(palindromeChecker("abcddcba")) // Output: true
console.log(palindromeChecker("HelloWorld")) // Output: false

// HOW IT WORKS:-
// .replace(/\W/g,""): uses the replace() method to remove all non-word characters in a string.
// .replace(/\w/g,""): uses the replace() method to remove all word characters in a string.
// The g flag performs a global search and replaces all non-word or word characters in a string.
