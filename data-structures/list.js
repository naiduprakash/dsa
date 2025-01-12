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
    if (this.length === 0) return undefined;

    let removedEle = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return removedEle;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bound");
    }
    return this.data[index];
  }

  update(index, element) {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bound");
    }
    this.data[index] = element;
  }

  insert(index, element) {
    if (index < 0 || index > this.length) {
      throw new RangeError("Index out of bound");
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
      throw new RangeError("Index out of bound");
    }

    let removedEle = this.data[index];

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

// Examples:

// // Create a new list
// const list = new List(10, 20, 30);
// console.log([...list]); // Output: [10, 20, 30]

// // push() - Add an element to the end of the list
// list.push(40);
// console.log([...list]); // Output: [10, 20, 30, 40]

// // pop() - Remove the last element of the list
// const popped = list.pop();
// console.log(popped);    // Output: 40
// console.log([...list]); // Output: [10, 20, 30]

// // get() - Retrieve an element by index
// const element = list.get(1);
// console.log(element);   // Output: 20

// // update() - Update an element at a specific index
// list.update(1, 25);
// console.log([...list]); // Output: [10, 25, 30]

// // insert() - Insert an element at a specific index
// list.insert(1, 15);
// console.log([...list]); // Output: [10, 15, 25, 30]

// // delete() - Delete an element at a specific index
// const deleted = list.delete(2);
// console.log(deleted);   // Output: 25
// console.log([...list]); // Output: [10, 15, 30]

// // Iterate over the list using for...of loop
// for (const item of list) {
//   console.log(item); // Output: 10, 15, 30 (one per line)
// }