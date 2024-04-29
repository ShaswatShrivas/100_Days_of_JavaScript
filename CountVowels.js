// Question:
// Write a function that takes an input of strings and returns the number of vowels
// i.e., (a,e,i,o,u) including both uppercase and lowercase.

// NOTE
// The input can contain both UPPERCASE and lowercase.
// The output should be  a non-negative integer.

// Solution

const countVowels = (str) => {
    let vowels = ['a','e','i','o','u'];
    // converting the string to lowercase and converting it to array
    let arr = str.toLowerCase().split('');
    console.log(arr);
    // initializing a count value
    let  count = 0;
    // Iterating through each character
    for (let char of arr){
        if (vowels.includes(char)){
            count++;
        }
    }
    // returning the final count
    return count;
}

console.log(countVowels("HEllo WOrld"));          // Output - 3
console.log(countVowels("JavaScrIpt prOblems"));  // Output - 5
console.log(countVowels("brrrp"));                // Output - 0
