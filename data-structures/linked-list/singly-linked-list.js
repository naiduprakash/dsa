class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) {
      throw new Error('index out of bound');
    }

    const newNode = new Node(value);

    if (index === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      for (let i = 0; i < index; i++) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      newNode.next = currentNode;
      prevNode.next = newNode;
    }
    this.size++;
  }

  insertAtEnd(value) {
    this.insert(this.size, value);
  }
  insertAtStart(value) {
    this.insert(0, value);
  }

  update(index, value) {
    if (index < 0 || index > this.size) {
      throw new Error('index out of bound');
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    currentNode.value = value;
  }

  delete(index) {
    if (index < 0 || index > this.size) {
      throw new Error('index out of bound');
    }

    let currentNode = this.head;
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      let prevNode = null;
      for (let i = 0; i < index - 1; i++) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = currentNode.next;
    }
    this.size--;
  }
  deleteAtEnd() {
    this.delete(this.size);
  }
  deleteAtStart() {
    this.delete(0);
  }

  find(cb) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (cb(currentNode, index) === true) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
      index++;
    }
    return null;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
  }

  print() {
    let currentNode = this.head;
    const result = [];
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(result.join('->'));
  }

  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current) {
          const value = current.value;
          current = current.next;
          return { value, done: false };
        }
        return { done: true };
      }
    };
  }
}

export default SinglyLinkedList;