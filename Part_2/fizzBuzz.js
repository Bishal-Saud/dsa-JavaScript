// 1.print number from 1 to n
// 2. if number divisible by 3 print "Fizz"
// 3. if number divisible by 5 print "Buzz"
// 4. if number divisible by 3 &  5 print "FizzBuzz"
// 5. Else print number

const findDivisible = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log("number", i);
    }
  }
};

findDivisible(30);
