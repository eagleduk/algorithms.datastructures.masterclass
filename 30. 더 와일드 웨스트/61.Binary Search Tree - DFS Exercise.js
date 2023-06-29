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
  DFSPreOrder() {
    if (this.root === null) return null;

    function getValue(node) {
      var left = [],
        right = [];
      if (node.left !== null) left = getValue(node.left);
      if (node.right !== null) right = getValue(node.right);
      return [node.value, ...left, ...right];
    }

    var result = getValue(this.root);
    return result;
  }
  DFSInOrder() {
    if (this.root === null) return null;

    function getValue(node) {
      var left = [],
        right = [];
      if (node.left !== null) left = getValue(node.left);
      if (node.right !== null) right = getValue(node.right);
      return [...left, node.value, ...right];
    }

    var result = getValue(this.root);
    return result;
  }
  DFSPostOrder() {
    if (this.root === null) return null;

    function getValue(node) {
      var left = [],
        right = [];
      if (node.left !== null) left = getValue(node.left);
      if (node.right !== null) right = getValue(node.right);
      return [...left, ...right, node.value];
    }

    var result = getValue(this.root);
    return result;
  }
}
