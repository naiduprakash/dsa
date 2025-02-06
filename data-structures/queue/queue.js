class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.data = new Array(capacity).fill(null);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log('Queue is Full');
      return;
    }
    if (this.isEmpty()) {
      this.front = this.rear = 0;
    } else {
      this.rear++;
    }
    this.data[this.rear] = value;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is Empty');
      return;
    }
    const value = this.data[this.front];
    this.data[this.front] = null;
    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } else {
      this.front++;
    }
    return value;
  }

  peek() {
    return this.data[this.front];
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return this.rear === this.capacity - 1;
  }

  clear() {
    this.front = -1;
    this.rear = -1;
  }

  print() {
    let result = '<--';
    for (let i = this.front; i <= this.rear; i++) {
      result += this.data[i] + '<--';
    }
    console.log(result);
    console.log('Front::', this.front, '  Rear::', this.rear);
  }
}

export default Queue;

// const queue = new Queue(5);
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.print();
// queue.dequeue();
// queue.dequeue();
// queue.print();
// queue.dequeue();
// queue.dequeue();
// queue.enqueue(40);
// queue.enqueue(50);
// queue.enqueue(60);
// queue.enqueue(70);
// queue.enqueue(80);
// queue.enqueue(90);
// queue.print();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.enqueue(100);
// queue.print();