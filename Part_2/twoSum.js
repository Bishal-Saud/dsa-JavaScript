// Two Sum (ugly code) This is not a better solution
// Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that add up to the target number. You also need to tell which positions (or indexes) those two numbers are at in the list.
// Example
// if the list is [2, 7, 11, 15] and the target is 9, then the answer would be [0, 1] because 2 (at index 0) plus 7 (at index 1) equals 9

function twoSums(arr, target) {
  //Loop through each number in the list
  for (i = 0; i < arr.length; i++) {
    //for each number check rest of list
    for (j = i + 1; j < arr.length; j++) {
      // if the current number  and the one we're checking add up to the target,return there indexes
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}
