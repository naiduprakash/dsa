class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyCircularLinkedList {

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) {
      throw new Error("index out of bound");
    }

    const newNode = new Node(value);

    if (this.head == null) {
      newNode.next = newNode;
      this.head = newNode;
    }
    else if (index === 0) {
      let currentNode = this.head;
      while (currentNode.next !== this.head) {
        currentNode = currentNode.next;
      }
      newNode.next = this.head;
      this.head = newNode;
      currentNode.next = this.head;

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
    this.insert(this.size, value)
  }
  insertAtStart(value) {
    this.insert(0, value)
  }

  update(index, value) {
    if (index < 0 || index > this.size) {
      throw new Error("index out of bound");
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    currentNode.value = value;
  }

  delete(index) {
    if (index < 0 || index > this.size) {
      throw new Error("index out of bound");
    }

    if (this.size === 1) {
      this.head = null
    }
    else if (index === 0) {
      let currentNode = this.head;

      while (currentNode.next !== this.head) {
        currentNode = currentNode.next;
      }
      currentNode.next = this.head.next
      this.head = this.head.next
    } else {
      let currentNode = this.head;

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
    this.delete(0)
  }


  find(cb) {
    let currentNode = this.head;
    let index = 0;
    do {
      if (cb(currentNode, index) === true) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
      index++;
    } while (currentNode !== this.head);

    return null;
  }

  reverse() {
    let currentNode = this.head;
    let lastNode = this.head;

    let prevNode = null;
    let nextNode = null;

    do {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    while (currentNode !== this.head);
    lastNode.next = prevNode;
    this.head = prevNode;
  }

  print() {

    let result = [];
    let currentNode = this.head;
    do {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    while (currentNode !== this.head);

    console.log(result.join("->"));
  }

  [Symbol.iterator]() {
    let currentNode = this.head;
    let count = 0;
    return {
      next: () => {
        if (count < this.size) {
          const value = currentNode.value;
          currentNode = currentNode.next;
          count++;
          return { value, done: false };
        }
        return { done: true };
      }
    };
  }
}


// Example Usage
const list = new SinglyCircularLinkedList();
list.insertAtStart(10);
list.insertAtEnd(20);
list.insert(1, 15);
list.insert(2, 18);
list.print(); // Output: 10 -> 15 -> 18 -> 20
list.update(1, 25);
list.print(); // Output: 10 -> 25 -> 18 -> 20
list.deleteAtStart();
list.print(); // Output: 25 -> 18 -> 20
list.deleteAtEnd();
list.print(); // Output: 25 -> 18
list.reverse();
list.print(); // Output: 18 -> 25
console.log("Node with value 18 :: ", list.find((node, index) => node.value === 18))
console.log("Node at index 1 :: ", list.find((node, index) => index === 1));
console.log(...list)