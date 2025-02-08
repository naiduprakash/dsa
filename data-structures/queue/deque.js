class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  pushFront(value) {
    const newNode = new Node(value);
    if (this.front === null) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.size++;
  }
  pushBack(value) {
    const newNode = new Node(value);
    if (this.rear === null) {
      this.front = this.rear = newNode;
    } else {
      newNode.prev = this.rear;
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }
  popFront() {
    if (this.isEmpty()) {
      console.log('Queue is Empty. Nothing to pop');
      return;
    }
    const newFront = this.front.next;
    this.front = newFront;
    this.front.prev = null;
    this.size--;
  }
  popBack() {
    if (this.isEmpty()) {
      console.log('Queue is Empty. Nothing to pop');
      return;
    }
    const newRear = this.rear.prev;
    this.rear = newRear;
    this.rear.next = null;
    this.size--;
  }
  frontValue() {
    if (this.isEmpty()) {
      console.log('Queue is Empty. Nothing to pop');
      return;
    }
    return this.front.value;
  }
  backValue() {
    if (this.isEmpty()) {
      console.log('Queue is Empty. Nothing to pop');
      return;
    }
    return this.front.value;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {

    if (this.isEmpty()) {
      console.log('Queue is empty');
      return;
    }
    this.printFromFront();
    this.printFromRear();
  }
  printFromFront() {

    if (this.front === this.rear) {
      console.log(`Front->${this.front.value}<-Rear`);
      return;
    }

    let currentNode = this.front;
    let result = 'Front->';
    while (currentNode) {
      const value = currentNode.value;
      result += value + (currentNode === this.rear ? '<--Rear' : '-->');
      currentNode = currentNode.next;
    }
    console.log(result);
  }
  printFromRear() {

    if (this.front === this.rear) {
      console.log(`Rear->${this.front.value}<-Front`);
      return;
    }

    let currentNode = this.rear;
    let result = 'Rear->';
    while (currentNode) {
      const value = currentNode.value;
      result += value + (currentNode === this.front ? '<--Front' : '-->');
      currentNode = currentNode.prev;
    }
    console.log(result);
  }
}

export default Deque;

// const queue = new Deque();

// queue.print();
// queue.pushFront(10);
// queue.print();
// queue.pushFront(20);
// queue.pushFront(30);
// queue.print();
// queue.pushBack(40);
// queue.pushBack(50);
// queue.print();
// queue.popFront();
// queue.popFront();
// queue.print();
// queue.popBack();
// queue.popBack();
// queue.print();