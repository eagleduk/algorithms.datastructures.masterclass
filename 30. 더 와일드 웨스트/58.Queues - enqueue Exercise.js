class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    var node = new Node(value);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.first.next = node;
      this.last = node;
    }
    this.size++;
    return this.size;
  }
}
