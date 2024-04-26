// Question:
// Write a function that takes an array as input and removes any repeated or duplicated elements.

// NOTE
// The input can contain both positive and negative numbers.
// The input can have unsorted numbers.
// It should return a new array with all unique elements.
// The output should maintain the original order of elements from the input array.

// Solution

const removeDuplicates = (arr) => {
    // Use the Set data structure to remove duplicates and preserve uniqueness
    let newArr = [...new Set(arr)];
    // Return the new array without duplicates
    return newArr;
}

// Test the function with example inputs and log the results
console.log(removeDuplicates([1, 2, 2, 3, 4, 5]));       // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 2, 4, 3, 7, 5]));       // Output: [1, 2, 4, 3, 7, 5]
console.log(removeDuplicates([10, -1, 2, 2, 4, -11]));   // Output: [10, -1, 2, 4, -11]

// NOTE-
// The new Set() method in JavaScript creates a new set of objects.
// A set of objects is a collection of unique values. It can store any type of value, whether primitive value or object references.
