class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (!this.top) { return null; }

    const top = this.top;
    this.top = this.top.next;
    this.length--;
    return top.value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  clear() {
    this.top = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  _print() {
    let currentNode = this.top;
    let output = 'Top -> ';
    while (currentNode) {
      output += `${currentNode.value} --> `;
      currentNode = currentNode.next;
    }
    output += 'null';
    console.log(output);
  }
}

export default StackLinkedList;