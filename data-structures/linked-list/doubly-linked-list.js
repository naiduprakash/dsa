class Node {
  constructor(value = null, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtStart(value) {
    this.insert(0, value);
  }

  insertAtEnd(value) {
    this.insert(this.size, value);
  }

  insert(pos, value) {

    if (pos < 0 || pos > this.size) {
      throw new Error('Index out of bound');
    }

    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else if (pos === 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (pos === this.size) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currentNode;
      if (pos <= this.size / 2) {
        currentNode = this.head;
        for (let i = 0; i < pos; i++) {
          currentNode = currentNode.next;
        }
      } else {
        currentNode = this.tail;
        for (let i = this.size - 1; i >= pos; i--) {
          currentNode = currentNode.prev;
        }
      }

      const prevNode = currentNode.prev;
      newNode.next = currentNode;
      newNode.prev = prevNode;
      prevNode.next = newNode;
      currentNode.prev = newNode;
    }

    this.size++;
  }

  deleteFromStart() {
    this.delete(0);
  }

  deleteFromEnd() {
    this.delete(this.size);
  }

  delete(pos) {
    if (pos < 0 || pos > this.size) {
      throw new Error('Index out of bound');
    }

    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    } else if (pos === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (pos === this.size) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let currentNode;
      if (pos <= this.size / 2) {
        currentNode = this.head;
        for (let i = 0; i < pos; i++) {
          currentNode = currentNode.next;
        }
      } else {
        currentNode = this.tail;
        for (let i = this.size - 1; i >= pos; i--) {
          currentNode = currentNode.prev;
        }
      }
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      currentNode.next = currentNode.prev = null;
    }
    this.size--;
  }

  find(cb, returnNode = false) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (cb(currentNode, index) === true) {
        return returnNode ? currentNode : currentNode.value;
      }
      currentNode = currentNode.next;
      index++;
    }
  }

  reverse() {
    let currentNode = this.head;
    let tempNode = null;
    while (currentNode) {
      tempNode = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = tempNode;
      currentNode = currentNode.prev;
    }
    if (tempNode) {
      this.tail = this.head;
      this.head = tempNode.prev;
    }
  }

  print() {
    this.printForward();
    this.printBackward();
  }

  printForward() {
    let currentNode = this.head;
    let result = [];
    while (currentNode) {
      if (currentNode === this.head) {
        result.push(`(Head:${currentNode.value})`);
      } else if (currentNode === this.tail) {
        result.push(`(Tail:${currentNode.value})`);
      } else {
        result.push(currentNode.value);
      }
      currentNode = currentNode.next;
    }
    result = result.join('-->');
    console.log(result);
  }

  printBackward() {
    let currentNode = this.tail;
    let result = [];
    while (currentNode) {
      if (currentNode === this.head) {
        result.push(`(Head:${currentNode.value})`);
      } else if (currentNode === this.tail) {
        result.push(`(Tail:${currentNode.value})`);
      } else {
        result.push(currentNode.value);
      }
      currentNode = currentNode.prev;
    }
    result = result.join('-->');
    console.log(result);
  }

}

export default DoublyLinkedList;

// const list = new DoublyLinkedList();
// list.insertAtStart(10);
// list.insertAtStart(20);
// list.insertAtStart(30);
// list.insertAtStart(40);
// list.insertAtStart(50);
// list.print();
// list.reverse();
// list.print();

// const Node20 = list.find((node) => node.value === 20);
// console.log(Node20);

// const nodeAtIndex2 = list.find((_, index) => index === 2);
// console.log(nodeAtIndex2);


// const list2 = new DoublyLinkedList();
// list2.insertAtEnd(10);
// list2.insertAtEnd(20);
// list2.insertAtEnd(30);
// list2.insertAtEnd(40);
// list2.insertAtEnd(50);
// list2.print();

// const list3 = new DoublyLinkedList();
// list3.insertAtStart(10);
// list3.insertAtEnd(50);
// list3.insert(1, 20);
// list3.insert(2, 30);
// list3.insert(3, 40);
// list3.print();