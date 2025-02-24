// 1. convert string to LowerCase
//2.convert string to array - split method
// 3.Capitalize each word using - map method
// 4. convert array back to string using join method
let cap = (name) => {
  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(cap("bishal saud"));
