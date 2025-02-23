// Push method

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  // get method
  get(i) {
    return this.data[i];
  }

  //pop method
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // shift method

  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    const item = this.data[index];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myNewArr = new myArray();
myNewArr.push("apple");
myNewArr.push("ball");
myNewArr.push("cat");
// myNewArr.pop();
console.log(myNewArr);
// console.log(myNewArr.shift());
console.log(myNewArr.deleteByIndex());
console.log(myNewArr);
// console.log(myNewArr.get(1));
