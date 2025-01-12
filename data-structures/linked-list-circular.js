class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedListCircular {

  head;
  tail;
  length;

  constructor(...elements) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const element of elements) {
      this.append(element);
    }
  }

  append(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.length++;
  }

  prepend(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.length++;
  }

  find(index) {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bounds");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current?.value;
  }

  update(index, element) {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bounds");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.value = element;
  }

  insert(index, element) {
    if (index < 0 || index > this.length) {
      throw new RangeError("Index out of bounds");
    }
    if (index === 0) {
      this.prepend(element);
    } else if (index === this.length) {
      this.append(element);
    } else {
      let prevNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }
      const newNode = new Node(element, prevNode.next);
      prevNode.next = newNode;
      this.length++;
    }
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      throw new RangeError("Index out of bounds");
    }
    let deletedValue;
    if (index === 0) {
      deletedValue = this.head.value;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.tail.next = this.head;
      }
    } else {
      let prevNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }
      const nodeToDelete = prevNode.next;
      deletedValue = nodeToDelete.value;
      prevNode.next = nodeToDelete.next;
      if (index === this.length - 1) {
        this.tail = prevNode;
      }
    }
    this.length--;
    return deletedValue;
  }

  [Symbol.iterator]() {
    let current = this.head;
    let count = 0;
    return {
      next: () => {
        if (count < this.length) {
          const value = current.value;
          current = current.next;
          count++;
          return { value, done: false };
        }
        return { done: true };
      }
    };
  }
}

export default LinkedListCircular;

// const list = new LinkedListCircular(10, 20);

// list.append(30);
// list.append(40);
// list.prepend(5);

// console.log([...list])        // [5, 10, 20, 30, 40]

// console.log(list.find(1));     // 10
// list.update(1, 15);
// console.log([...list])        // [5, 15, 20, 30, 40]

// list.insert(1, 12);
// console.log([...list])        // [5, 12, 15, 20, 30, 40]

// console.log(list.delete(2));  // 15
// console.log([...list])        // [5, 12, 20, 30, 40]

// for (const node of list) {
//   console.log(node);
// }