class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    var result = this.tail;
    if (this.length === 0) return result;
    else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      var current = this.head;
      var next = current.next;
      while (next.next) {
        current = next;
        next = current.next;
      }
      current.next = null;
      this.tail = current;
      this.length--;
    }
    return result;
  }
  set(index, val) {
    if (index > this.length) return false;

    if (index === 0) {
      this.head.val = val;
    } else if (index === this.length) {
      this.tail.val = val;
    } else {
      var target = this.get(index);
      target.val = val;
    }
    return true;
  }
  get(index) {
    if (index > this.length) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    var result = this.head;
    for (var i = 0; i < index; i++) {
      result = result.next;
    }
    return result;
  }
}
