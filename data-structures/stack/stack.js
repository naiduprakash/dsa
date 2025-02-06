class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.data = new Array(capacity);
    this.top = -1;
  }

  push(value) {
    if (this.isFull()) {
      console.log('Stack is Full');
      return;
    }
    this.data[++this.top] = value;
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Stack is Empty');
      return null;
    }
    const value = this.data[this.top];
    this.data[this.top--] = null;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[this.top];
  }

  clear() {
    this.data = new Array(this.capacity);
    this.top = -1;
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return (this.top + 1) === this.capacity;
  }

  print() {
    if (this.isEmpty()) {
      console.log('Stack is Empty', '  top::', this.top);
      return;
    }
    let result = '';
    for (let i = this.top; i >= 0; i--) {
      result += this.data[i] + (i > 0 ? ',' : ' ');
    }
    console.log(result, '  top::', this.top);
  }
}

export default Stack;
