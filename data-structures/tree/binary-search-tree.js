// import { printBinaryTree } from '../../helpers/printTreeStructure.js';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return current;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }
  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _minValueNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  _deleteNode(node, value) {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      node.left = this._deleteNode(value, node.left, node);
    } else if (value > node.value) {
      node.right = this._deleteNode(value, node.right, node);
    } else {
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      const successor = this._minValueNode(node.right);
      node.value = successor.value;
      node.right = this._deleteNode(node.right, successor.value);
    }
    return node;
  }

  preOrderTraversal(node, result = []) {
    if(!node) {
      return result;
    }
    result.push(node.value);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);
    return result;
  }

  inOrderTraversal(node, result = []) { 
    if(!node) {
      return result;
    }
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
  }

  postOrderTraversal(node, result = []) { 
    if(!node) {
      return result;
    }
    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);
    return result;
  }

  levelOrderTraversal() {
    const result = [];
    const queue = [];

    if(this.root){
      queue.push(this.root);
    }

    while(queue.length){
      const node = queue.shift();
      result.push(node.value);
      if(node.left){
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right);
      }
    }
    return result;
  }
}

export default BinarySearchTree;

// const tree = new BinarySearchTree();

// tree.insert(30);
// tree.insert(20);
// tree.insert(10);
// tree.insert(25);
// tree.insert(40);
// tree.insert(35);
// tree.insert(50);
// printBinaryTree(tree.root);

// tree.delete(20);
// tree.delete(10);
// printBinaryTree(tree.root);


// console.log('preOrderTraversal');
// console.log(tree.preOrderTraversal(tree.root));
// console.log('inOrderTraversal');
// console.log(tree.inOrderTraversal(tree.root));
// console.log('postOrderTraversal');
// console.log(tree.postOrderTraversal(tree.root));
// console.log('levelOrderTraversal');
// console.log(tree.levelOrderTraversal());


// console.log(tree.find(20));