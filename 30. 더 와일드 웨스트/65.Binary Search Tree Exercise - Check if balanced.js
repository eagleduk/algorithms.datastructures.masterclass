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
    // only accept numbers....watch out since NaN is typeof number!
    if (typeof value === "number" && !isNaN(value)) {
      // if there is nothing in the tree, start it off with a new node!
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        // current variable used for traversal, just like linked lists!
        var current = this.root;
        // keep looping till we get to the correct spot;
        while (true) {
          if (value < current.value) {
            // if there is nothing on the left
            if (current.left === null) {
              // make a new node and get out
              current.left = new Node(value);
              return this;
            }
            // otherwise, keep moving on!
            else {
              current = current.left;
            }
          } else if (value > current.value) {
            // if there is nothing on the right
            if (current.right === null) {
              // make a new node and get out
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          }
          // otherwise it must be a duplicate so let's get out of here
          else {
            return "duplicate!";
          }
        }
      }
    } else return "Please insert a number";
  }
  getDepth(node, depth) {
    if (node === null) return depth;
    var lDepth = depth;
    var rDepth = depth;

    lDepth = node.left ? this.getDepth(node.left, depth + 1) : depth;
    rDepth = node.right ? this.getDepth(node.right, depth + 1) : depth;

    return Math.max(lDepth, rDepth);
  }
  // 이진 트리의 왼쪽, 오른쪽 트리의 깊이의 차이가 1보다 큰지 확인 => 트리의 균형 확인
  isBalanced() {
    if (this.root === null) return true;
    var left = this.root.left;
    var right = this.root.right;

    var leftDepth = left ? 1 : 0;
    var rightDepth = right ? 1 : 0;

    leftDepth = this.getDepth(left, leftDepth);
    rightDepth = this.getDepth(right, rightDepth);

    return Math.abs(leftDepth - rightDepth) <= 1;
  }
}
