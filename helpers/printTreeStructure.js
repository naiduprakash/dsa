export function printBinaryTree(node, prefix = '', isLeft = true) {
  if (!node) { 
    console.log('Empty Tree');
    return; 
  }

  // If there's a right child, print it first (so it appears on top)
  if (node.right) {
    printBinaryTree(node.right, prefix + (isLeft ? (prefix ? '|  ' : '   ') : '   '), false);
  }
  // Print the current node
  if (prefix) {
    console.log(prefix + (isLeft ? '└─>' : '┌─>') + node.value);
  } else {
    // Root Node
    console.log('──>' + node.value);
  }

  // If there's a left child, print it
  if (node.left) {
    printBinaryTree(node.left, prefix + (isLeft ? '   ' : (prefix ? '|  ' : '   ')), true);
  }
}