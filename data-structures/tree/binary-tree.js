// import { printBinaryTree } from '../../helpers/printTreeStructure.js';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (!node.left) {
        node.left = newNode;
        return;
      } else {
        queue.push(node.left);
      }

      if (!node.right) {
        node.right = newNode;
        return;
      } else {
        queue.push(node.right);
      }
    }
  }

  delete(value) {
    if (!this.root) { return; }
    const queue = [this.root];
    let nodeToDelete = null, lastNode = null, lastParent = null;

    while (queue.length) {
      const node = queue.shift();
      console.log(node.value);
      if (node.value === value) {
        nodeToDelete = node;
      }
      if (node.left) {
        lastParent = node;
        lastNode = node.left;
        queue.push(node.left);
      }
      if (node.right) {
        lastParent = node;
        lastNode = node.right;
        queue.push(node.right);
      }
    }

    if (nodeToDelete && lastNode) {
      nodeToDelete.value = lastNode.value;
      if (lastParent) {
        if (lastParent.right === lastNode) {
          lastParent.right = null;
        } else {
          lastParent.left = null;
        }
      } else {
        this.root = null;
      }
    }
  }

  update(oldValue, newValue) {
    if (!this.root) { return; }
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      if (node.value === oldValue) {
        node.value = newValue;
        return;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  find(value) {
    if (!this.root) { return; }
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      if (node.value === value) {
        return node;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  preOrderTraversal(node) {
    console.log(node.value);
    if (node.left) {
      this.preOrderTraversal(node.left);
    }
    if (node.right) {
      this.preOrderTraversal(node.right);
    }
  }

  inOrderTraversal(node) {
    if (node.left) {
      this.inOrderTraversal(node.left);
    }
    console.log(node.value);
    if (node.right) {
      this.inOrderTraversal(node.right);
    }
  }
  postOrderTraversal(node) {
    if (node.left) {
      this.postOrderTraversal(node.left);
    }
    if (node.right) {
      this.postOrderTraversal(node.right);
    }
    console.log(node.value);
  }
}

export default BinaryTree;

// const tree = new BinaryTree();

// tree.insert(10);
// tree.insert(20);
// tree.insert(30);
// tree.insert(40);
// tree.insert(50);

// printBinaryTree(tree.root);

// tree.preOrderTraversal(tree.root);  // 10,20,40,50,30
// console.log('');
// tree.inOrderTraversal(tree.root);   // 40,20,50,10,30
// console.log('');
// tree.postOrderTraversal(tree.root);  // 40,50,20,30,10
// console.log(tree.find(20));