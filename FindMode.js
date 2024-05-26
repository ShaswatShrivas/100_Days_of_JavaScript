// Question:
// Write a function to find the mode in an array.

// NOTE
// The input should contain at least one positive number.
// The mode will always be unique i.e., it does not contain two numbers with the same frequency.

// Solution

const findMode = (arr) => {
    let count = {}; // Object to store the frequency of each element
    let Maxnum = 0; // Variable to track the highest frequency
    let mode; // Variable to store the mode

    for (let element of arr) {
        // Count the frequency of each element in the array
        count[element] = (count[element] || 0) + 1;

        // If the current element's frequency is greater than Maxnum, update Maxnum and mode
        if (count[element] > Maxnum) {
            Maxnum = count[element];
            mode = element;
        }
    }

    // Log the frequency count object
    console.log(count);

    // Return the mode
    return mode;
}

console.log(findMode([1, 2, 3, 4, 3, 4, 3, 3, 5, 5, 4, 3, 1]));  // Output - 3
console.log(findMode([1, 2, 3, 2, 2, 5, 3, 4, 2, 5, 4, 3, 1]));  // Output - 2
