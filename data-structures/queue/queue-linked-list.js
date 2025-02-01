class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class QueueLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    const node = this.front;
    this.front = this.front.next;
    this.size--;
    return node.value;
  }

  peek() {
    return this.front ? this.front.value : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.front = this.rear = null;
    this.size = 0;
  }
}

export default QueueLinkedList;