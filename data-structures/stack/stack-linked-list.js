class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (!this.top) { return null; }
    const top = this.top;
    this.top = this.top.next;
    this.size--;
    return top.value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  clear() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {

    let currentNode = this.top;
    let output = 'Top -> ';
    while (currentNode) {
      output += `${currentNode.value} --> `;
      currentNode = currentNode.next;
    }
    output += 'null';
    console.log(output, ' this.size::', this.size);
  }
}

export default StackLinkedList;