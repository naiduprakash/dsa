class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.data = new Array(capacity);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }
  enqueue(value) {
    if (this.isFull()) {
      console.log('Queue is Full');
      return null;
    }
    if (this.isEmpty()) {
      this.front = this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.capacity;
    }
    this.data[this.rear] = value;
    this.size++;

  }
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is Empty');
      return null;
    }
    const value = this.data[this.front];
    this.data[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Queue is Empty');
      return null;
    }
    return this.data[this.rear];
  }
  isEmpty() {
    return this.size === 0;
  }
  isFull() {
    return this.size === this.capacity;
  }
  clear() {
    this.data = new Array(this.capacity);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }

  print() {
    let result = '';
    let size = this.size;
    let front = this.front;
    while (size) {
      const index = front % this.capacity;
      result += this.data[index] + ',';
      size--;
      front++;
    }
    console.log('Front', this.front, ' Rear', this.rear);
    console.log(result);
  }
}

export default CircularQueue;


// const queue = new CircularQueue(5);
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.print();
// queue.dequeue();
// queue.dequeue();
// queue.print();
// queue.dequeue();
// queue.dequeue();
// queue.print();
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
// queue.print();
// queue.enqueue(100);
// queue.print();