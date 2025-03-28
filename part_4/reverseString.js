function reverseStr(str) {
  const stack = [];
  for (let char of str) {
    stack.push(char); // push all char to array like eg: Hello ['H','e','l','l','o']
  }

  let reversedStr = ""; // after storing- olleH

  while (stack.length > 0) {
    reversedStr += stack.pop(); // store last element to reversedStr
  }

  return reversedStr;
}

const reversedString = reverseStr("Hello");
console.log(reversedString);
