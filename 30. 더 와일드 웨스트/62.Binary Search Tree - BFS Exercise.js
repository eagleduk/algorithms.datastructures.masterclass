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
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  breadthFirstSearch() {
    var ii = 0;
    if (this.root === null) return;

    var index = [this.root],
      result = [];

    while (index.length) {
      var node = index.shift();
      result.push(node.value);
      if (node.left !== null) index.push(node.left);
      if (node.right !== null) index.push(node.right);
    }

    return result;
  }
}
