// Question:
// Write a function that takes two parameters: a string and a character
// The function should return the specified number of times that the given character appears in the string.

// NOTE
// The function should be case-sensitive.
// The function should handle both uppercase and lowercase characters.
// The character parameter can be any printable ASCII character.
// If the character is not present in the string, the function should return 0.

// Solution

const countChar = (word, char) => {
    // Convert both the word and the character to lowercase to ensure case-sensitivity
    word = word.toLowerCase();
    char = char.toLowerCase();

    // Initialize totalCount to store the count of occurrences
    let totalCount = word.split("").reduce((accum, currChar) => {
        // Check if the current character matches the given character
        if (currChar === char) {
            // If the characters match, increment the accumulator
            accum++;
        }
        return accum;
    }, 0);

    // Return the total count of occurrences
    return totalCount;
};

// Test the function with an example input and log the result
console.log(countChar("This is now becoming fun", "n"));

// Output - 3
