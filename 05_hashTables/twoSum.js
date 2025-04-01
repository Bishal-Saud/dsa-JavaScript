//refactor

function twoSum(numbers, target) {
  const numMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const compliment = target - numbers[i];
    if (compliment in numMap && numMap[compliment] !== i) {
      return [numMap[compliment], i];
    }
    numMap[numbers[i]] = i;
  }
  return [];
}

const numbers = [1, 5, 3, 4, 5];
const target = 9;
const result = twoSum(numbers, target);

console.log(result);
