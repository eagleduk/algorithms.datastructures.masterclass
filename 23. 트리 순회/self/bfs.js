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
    if (this.root) {
      var parent = this.root;

      while (parent) {
        if (parent.value < value) {
          if (parent.right) {
            parent = parent.right;
          } else {
            parent.right = node;
            break;
          }
        } else {
          if (parent.left) {
            parent = parent.left;
          } else {
            parent.left = node;
            break;
          }
        }
      }
    } else {
      this.root = node;
    }
    return this;
  }
  find(value) {
    if (this.root) {
      var current = this.root;
      while (true) {
        if (current.value === value) return true;
        if (value < current.value) {
          if (current.left) {
            current = current.left;
          } else return false;
        } else {
          if (current.right) {
            current = current.right;
          } else return false;
        }
      }
    }
    return false;
  }
  bfs() {
    var queue = [];
    var result = [];

    queue.push(this.root);

    while (queue.length > 0) {
      var current = queue.unshift();

      if (current) {
        queue.push(current.left);
        queue.push(current.right);

        result.push(current);
      }
    }
    return result;
  }

  preOrder() {
    var result = [];

    function travers(node) {
      result.push(node);
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
    }

    travers(this.root);

    return result;
  }

  postOrder() {
    var result = [];

    function travers(node) {
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
      result.push(node);
    }

    travers(this.root);

    return result;
  }

  inOrder() {
    var result = [];

    function travers(node) {
      if (node.left) travers(node.left);
      result.push(node);
      if (node.right) travers(node.right);
    }

    travers(this.root);

    return result;
  }
}

var tree = new BinarySearchTree();

tree.insert(41);
tree.insert(20);
tree.insert(11);
tree.insert(7);
tree.insert(12);
tree.insert(29);
tree.insert(32);
tree.insert(65);
tree.insert(50);
tree.insert(91);
tree.insert(72);
tree.insert(68);
tree.insert(99);
