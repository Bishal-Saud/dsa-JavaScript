const isValidParenthesis = (str) => {
  const stack = [];
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let char of str) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      const top = stack.pop();
      console.log(top);

      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValidParenthesis("{}()[]")); //true
console.log(isValidParenthesis("{}()[")); //false
console.log(isValidParenthesis("{}()")); //true
