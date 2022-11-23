class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let node = new Node(val);
    node.next = this.first;
    this.first = node;

    if (this.size === 0) {
      this.last = node;
    }
    this.size++;

    return this.size;
  }
}
