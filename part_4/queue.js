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

  minQueue() {
    if (this.length < 0) {
      return undefined;
    }
    let current = this.first;
    let minValue = current.value;

    while (current.next) {
      current = current.next;
      if (current.value < minValue) {
        minValue = current.value;
      }
    }
    console.log("minimum", minValue);

    return minValue;
  }
}

const firstQueue = new Queue(10);
firstQueue.enqueue(1);
firstQueue.enqueue(2);
firstQueue.enqueue(3);
firstQueue.minQueue();
// console.log("----", firstQueue);
// firstQueue.dequeue();
// console.log("----", firstQueue);
