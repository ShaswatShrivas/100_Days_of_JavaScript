// Question:
// Write a function to generate a hashtag from the given input string.
// If there are multiple longest words, then return the first encountered.

// NOTE
// The input string should be converted into a hashtag format, where each word is capitalized and concatenated.
// If the length of the input string is greater than 280 or none or consist of only white spaces than,
// the function should return false.


// Solution

const generateHash = (str) => {
    // Check if the input string is empty or exceeds 280 characters, return false in such cases
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }

    // Split the input string into an array of words
    str = str.split(" ");

    // Capitalize the first letter of each word in the array
    str = str.map(
        (curElem) =>
            curElem.replace(curElem[0], curElem[0].toUpperCase())
    );

    // Join the capitalized words and prepend a '#' symbol to form the hash
    str = `#${str.join("")}`;

    // Return the generated hash
    return str;
};

// Test the function with an example input and log the result
console.log(generateHash("100 days of javascript"));


// Output should be :- #100DAYSJAVASCRIPT