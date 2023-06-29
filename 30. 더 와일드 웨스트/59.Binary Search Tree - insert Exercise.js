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
    var node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      var parent = this.root;
      while (true) {
        if (parent.value < value) {
          if (parent.right === null) {
            parent.right = node;
            break;
          } else {
            parent = parent.right;
          }
        } else {
          if (parent.left === null) {
            parent.left = node;
            break;
          } else {
            parent = parent.left;
          }
        }
      }
    }
  }
}
