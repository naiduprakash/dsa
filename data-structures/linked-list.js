
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next
  }
}

class LinkedList {

  #head;
  #tail;
  #length;

  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  get length() {
    return this.#length;
  }

  #getNodeAt(index) {
    if (index < 0 || index >= this.#length) {
      throw new RangeError("Index out of bounds");
    }
    let current = this.#head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  append(element) {
    const newNode = new Node(element);
    if (this.#head === null) {
      this.#head = newNode;
      this.#tail = newNode;
    }
    else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.#length++;
  }

  prepend(element) {
    const newNode = new Node(element, this.#head)
    this.#head = newNode;
    if (this.#tail === null) {
      this.#tail = newNode;
    }
    this.#length++
  }

  find(index) {
    return this.#getNodeAt(index)?.value;
  }

  update(index, element) {
    let node = this.#getNodeAt(index);
    node.value = element;
  }

  insert(index, element) {
    if (index < 0 || index > this.#length) {
      throw new RangeError("Index out of bounds");
    }
    if (index === 0) {
      this.prepend(element);
    }
    else if (index === this.#length) {
      this.append(element);
    }
    else {
      const prevNode = this.#getNodeAt(index - 1);
      const newNode = new Node(element, prevNode.next);
      prevNode.next = newNode;
      this.#length++;
    }
  }

  delete(index) {
    if (index < 0 || index >= this.#length) {
      throw new RangeError("Index out of bounds");
    }
    let deletedValue;
    if (index === 0) {
      deletedValue = this.#head.value;
      this.#head = this.#head.next;
      if (this.#length === 1) {
        this.#tail = null
      }
    }
    else {
      const prevNode = this.#getNodeAt(index - 1);
      const nodeToDelete = prevNode.next;
      deletedValue = nodeToDelete.value;
      prevNode.next = nodeToDelete.next;
      if (index === this.#length - 1) {
        this.#tail = prevNode;
      }
    }
    this.#length--;
    return deletedValue;
  }

  print() {
    let current = this.#head;
    let data = [];
    while (current) {
      data.push(current.value);
      current = current.next;
    }
    console.log(data);
  }

  [Symbol.iterator]() {
    let current = this.#head;
    return {
      next() {
        if (current) {
          const value = current.value;
          current = current.next;
          return { value, done: false }
        }
        return { done: true }
      }
    }
  }
}


const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.print(); // [5, 10, 20]

console.log(list.find(1)); // 10
list.update(1, 15);
list.print(); // [5, 15, 20]

list.insert(1, 12);
list.print(); // [5, 12, 15, 20]

console.log(list.delete(2)); // 15
list.print(); // [5, 12, 20]

for (const node of list) {
  console.log(node);
}