class List {
  data;
  length;

  constructor(...elements) {
    this.data = {};
    this.length = 0;

    for (let i = 0; i < elements.length; i++) {
      this.data[i] = elements[i];
      this.length++;
    }
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) { return undefined; }

    const removedEle = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return removedEle;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new RangeError('Index out of bound');
    }
    return this.data[index];
  }

  update(index, element) {
    if (index < 0 || index >= this.length) {
      throw new RangeError('Index out of bound');
    }
    this.data[index] = element;
  }

  insert(index, element) {
    if (index < 0 || index > this.length) {
      throw new RangeError('Index out of bound');
    }

    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = element;
    this.length++;
    return this.length;
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      throw new RangeError('Index out of bound');
    }

    const removedEle = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return removedEle;
  }

  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;
    const length = this.length;

    return {
      next() {
        if (index < length) {
          return { value: data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
}

export default List;