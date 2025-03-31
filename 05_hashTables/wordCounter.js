function wordCounter(text) {
  const lowerText = text.toLowerCase();
  const wordMap = {};

  const words = lowerText.split(/\s+/);
  //   console.log("words---", words);

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }
  return wordMap;
}

const text = "Hello hello my name is bishal bishal saud saud";
const result = wordCounter(text);
console.log(result);
