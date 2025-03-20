class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    if (this.length === 0) {
      this.first = newNode;
    }
    const newNode = new Node(value);
    newNode.next = this.first;
    this.first = newNode;
    this.length++;

    return this;
  }
  pop() {
    if (this.length === 0) return null;
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;

    return temp;
  }
}

const firstStack = new Stack(0);
firstStack.push(1);
firstStack.push(2);
firstStack.push(3);
console.log("-----1", firstStack);
firstStack.pop();
console.log("-----2", firstStack);
