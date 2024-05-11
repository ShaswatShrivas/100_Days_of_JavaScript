// Question:
// Write a function to return the median of the numbers present in an array.

// NOTE
// Sort the array in ascending order.
// If the input has even numbers, print the average of the two middle values.
// If the input has odd elements, the median is the middle element.
// The output should return 0 if the input is empty or null.

// Solution

const findMedian = (arr) => {
    // Check if the input array is empty or null
    if (!arr || arr.length === 0) return 0;

    // Sorting the array in ascending order
    arr = arr.sort((a, b) => a - b);

    // Log the sorted array for debugging purposes
    console.log(arr);

    // Calculate the index of the middle element
    let m = Math.floor(arr.length / 2);
    // If the array length is odd, return the middle element

    if (arr.length % 2 !== 0) {
        return arr[m];

    } else {
        // If the array length is even, return the average of the two middle values
        return (arr[m] + arr[m - 1]) / 2;
    }
}

// Test the function with example inputs and log the results
console.log(findMedian([1, 2, 3, 4, 5]));     // Output: 3
console.log(findMedian([1, 2, 3, 4, 5, 6]));  // Output: 3.5
console.log(findMedian([3, 26, 34, 54, 7]));  // Output: 26
