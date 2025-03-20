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
    const newNode = new Node(value);
    newNode.next = this.first;
    this.first = newNode;
    this.length++;

    return this;
  }
}

const firstStack = new Stack(0);
firstStack.push(1);
firstStack.push(2);
firstStack.push(3);

console.log("-----", firstStack);
