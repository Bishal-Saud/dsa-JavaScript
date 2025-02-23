let num = 1234;
let reverseStr = num.toString().split("").reverse().join("");
console.log("--reverse str", reverseStr);
let strToInt = parseInt(reverseStr) * Math.sign(num); //Math.sign() is a built-in JavaScript function that returns the sign of a number—indicating whether it is positive, negative, or zero.
console.log(typeof strToInt); // number
console.log(typeof reverseStr); // string
console.log("--reverse Int", strToInt);
