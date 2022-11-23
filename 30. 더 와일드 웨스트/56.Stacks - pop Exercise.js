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
  pop() {
    let result = this.first;
    this.first = result.next;

    this.size--;
    if (this.size === 0) this.last = null;
    return result.value;
  }
}
