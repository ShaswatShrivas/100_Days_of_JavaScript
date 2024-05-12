// Question:
// Write a function/logic to count the number of times each element has occurred in a given array.

// NOTE
// Can sort the array in ascending order.
// Return the output for each element representing the frequency of their occurrence.

// Solution

const numbers = [1, 2, 2, 3, 4, 5, 6, 5, 7];
let count = {};

for (let element of numbers) {
    // Check if the element exists as a key in the count object
    // If it does, increment its count; otherwise, initialize its count to 1
    count[element] = (count[element] || 0) + 1;
}

// Log the count object, which contains the frequencies of each element
console.log(count);  // Output: { '1': 1, '2': 2, '3': 1, '4': 1, '5': 2, '6': 1, '7': 1 }
