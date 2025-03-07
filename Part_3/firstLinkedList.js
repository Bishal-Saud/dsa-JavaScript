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
    if (!this.head) return null;
    this.head = this.head.next;
    this.length--;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.push(5);
myLinkedList.push(3);
myLinkedList.push(2);

// myLinkedList.unshift(4);
console.log("----", myLinkedList);
myLinkedList.shift();
console.log("----", myLinkedList);
// console.log("----", myLinkedList.pop());
// console.log("----", myLinkedList);
