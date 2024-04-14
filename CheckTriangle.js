// Question:
// Write a function to check if a triangle is equilateral, isosceles, or scalene by taking the lengths of the triangle's sides as parameters.

// NOTE
// If all sides are equal, return "Equilateral".
// If any two sides are equal, return "Isosceles".
// Else return "Scalene".

// Solution
const checkTriangle = (a, b, c) => {
    // Check for invalid criteria (side lengths should be non-zero)
    if (a == 0 || b == 0 || c == 0) {
        console.log('Invalid Criteria: Side lengths should be non-zero.');
    }
    // Check if all sides are equal (Equilateral)
    else if (a == b && b == c) {
        console.log('Equilateral Triangle');
    }
    // Check if any two sides are equal (Isosceles)
    else if (a == b || a == c || b == c) {
        console.log('Isosceles Triangle');
    }
    // Otherwise, it's a Scalene triangle
    else {
        console.log('Scalene Triangle');
    }
}

// Test the function with example inputs and log the results
checkTriangle(3, 3, 3); // Output: Equilateral Triangle
checkTriangle(3, 3, 6); // Output: Isosceles Triangle


