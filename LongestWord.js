// Question:
// Write a function to find the longest word that takes input as a string and returns the longest word present in it.
// If there are multiple longest words, then return the first encountered.

// NOTE
// If the input string is empty or consists only of whitespaces, the function should return false.
// The function should ignore leading and trailing whitespaces when determining the longest word.


// Solution
const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false; // Returns false if the length of the string is none.
    }

    let words = str.split(" "); // Splits the string into words based on spaces between them.
    words = words.sort((a, b) => b.length - a.length); // Sorts the words based on their lengths in descending order.
    return words[0]; // Returns the first word, which is the longest.
}

console.log(
    findLongestWord("This is a sample text")
);
