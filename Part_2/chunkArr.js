// Array Chunk
// Write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunks of the specified size.
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// [[1, 2, 3], [4, 5, 6], [7, 8]]
// chunkArray ([1, 2, 3, 4, 5], 2)
//  Output: [ [1, 2], [3, 4]]

const chunk = (arr, size) => {
  const chunkArr = [];
  let index = 0;
  while (index < arr.length) {
    let chunk = arr.slice(index, index + size);
    chunkArr.push(chunk);
    index += size;
  }
};
