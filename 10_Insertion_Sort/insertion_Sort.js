function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];

    let j = i - 1;
    while (i >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const unSorted = [1, 5, 4, 3, 2];
const res = insertionSort(unSorted);
console.log(unSorted);
