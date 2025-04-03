function Factorial(number) {
  return number === 0 ? 1 : number * Factorial(number - 1);
}
console.log(Factorial(5));
