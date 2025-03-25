class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }
  dequeue() {
    let temp = this.first;

    if (this.length === 0) return null;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}

const firstQueue = new Queue(0);
firstQueue.enqueue(1);
firstQueue.enqueue(2);
firstQueue.enqueue(3);
console.log("----", firstQueue);
firstQueue.dequeue();
console.log("----", firstQueue);
