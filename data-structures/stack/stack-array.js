class StackArray {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[this.data.length - 1];
  }

  clear() {
    this.data = [];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }

  print() {
    console.log(this.data.join(','));
  }
}

export default StackArray;