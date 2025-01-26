class Node {
  constructor(value = null, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyCircularLinkedList {
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
    if (this.size === 0) {
      newNode.prev = newNode.next = newNode;
      this.head = this.tail = newNode;
    } else if (pos === 0) {
      newNode.next = this.head;
      newNode.prev = this.tail;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.head = newNode;
    } else if (pos === this.size) {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
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
        for (let i = this.size; i > pos; i--) {
          currentNode = currentNode.prev;
        }
      }
      newNode.prev = currentNode.prev;
      newNode.next = currentNode;
      currentNode.prev.next = newNode;
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

    if (this.size === 0) {
      return;
    }

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else if (pos === 0) {
      const newHead = this.head.next;
      this.tail.next = newHead;
      newHead.prev = this.tail;
      this.head.next = this.head.prev = null;
      this.head = newHead;
    } else if (pos === this.size) {
      const newTail = this.tail.prev;
      this.head.prev = newTail;
      newTail.next = this.head;
      this.tail.next = this.tail.prev = null;
      this.tail = newTail;
    } else {
      let currentNode;
      if (pos <= this.size / 2) {
        currentNode = this.head;
        for (let i = 0; i < pos; i++) {
          currentNode = currentNode.next;
        }
      } else {
        currentNode = this.tail;
        for (let i = this.size; i > pos; i--) {
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
    do {
      if (cb(currentNode.value, index) === true) {
        return returnNode ? currentNode : currentNode.value;
      }
      currentNode = currentNode.next;
      index++;
    } while (currentNode !== this.head);
  }

  reverse() {
    if (this.size < 2) {
      return;
    }

    let currentNode = this.head;
    let temp;
    do {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
    } while (currentNode !== this.head);

    this.tail = this.head;
    this.head = temp.prev;
  }

  print() {
    this.printForward();
    this.printBackward();
  }

  printForward() {
    if (this.head === null && this.tail === null) {
      console.log('Head:Tail:null');
      return;
    }
    if (this.head === this.tail) {
      console.log(`Head:Tail:${this.head.value}`);
      return;
    }

    let currentNode = this.head;
    const result = [];
    do {
      if (currentNode === this.head) {
        result.push(`(Head:${currentNode.value})`);
      } else if (currentNode === this.tail) {
        result.push(`(Tail:${currentNode.value})`);
      } else {
        result.push(currentNode.value);
      }
      currentNode = currentNode.next;
    } while (currentNode !== this.head);
    console.log('Forward :: ', result.join('-->'));
  }

  printBackward() {
    if (this.head === null && this.tail === null) {
      console.log('Head:Tail:null');
      return;
    }
    if (this.head === this.tail) {
      console.log(`Head:Tail:${this.head.value}`);
      return;
    }

    let currentNode = this.tail;
    const result = [];
    do {
      if (currentNode === this.head) {
        result.push(`(Head:${currentNode.value})`);
      } else if (currentNode === this.tail) {
        result.push(`(Tail:${currentNode.value})`);
      } else {
        result.push(currentNode.value);
      }
      currentNode = currentNode.prev;
    } while (currentNode !== this.tail);
    console.log('Backward :: ', result.join('-->'));
    return;
  }
}

export default DoublyCircularLinkedList;

// const list = new DoublyCircularLinkedList();
// list.insertAtStart(10);
// list.insertAtStart(20);
// list.insertAtStart(30);
// list.insertAtStart(40);
// list.insertAtStart(50);
// list.print();
// list.reverse();
// list.print();
// list.deleteFromStart();
// list.deleteFromEnd();
// list.delete(1);
// list.print();

// const Node20 = list.find((value) => value === 20);
// console.log(Node20);

// const nodeAtIndex1 = list.find((_, index) => index === 1);
// console.log(nodeAtIndex1);