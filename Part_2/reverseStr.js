// Reverse String
let reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("Bishal"));

// Palindromes - if the reverse string is equal to the original one the that word is palindrome
// for eg: cddc-cddc,abba-abba

let palindrome = (str) => str.split("").reverse().join("") === str;
console.log(palindrome("abba")); // true
console.log(palindrome("bia")); //false
