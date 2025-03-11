class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head) return null;
    let currentNode = this.head;
    let prev = null;

    while (currentNode.next) {
      prev = currentNode;
      currentNode = currentNode.next;
    }

    if (!prev) {
      this.head = null;
      this.tail = null;
    } else {
      prev.next = null;
      this.prev;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    return currentNode.value;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }
  shift() {
    let temp = this.head;
    if (!this.head) return null;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      return null;
    }
    return temp;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let temp = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }

      temp = temp.next;
    }
  }

  getElementByIndex(index) {
    let counter = 0;
    let temp = this.head;
    if (!this.head) return null;
    while (temp) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.push(5);
myLinkedList.push(3);
myLinkedList.push(2);

// myLinkedList.unshift(4);
// console.log("----", myLinkedList);
// myLinkedList.shift();
// myLinkedList.getFirst();
console.log("----", myLinkedList.getElementByIndex(4));
// console.log("----", myLinkedList.getLast());
// console.log("----", myLinkedList.pop());
// console.log("----", myLinkedList);
