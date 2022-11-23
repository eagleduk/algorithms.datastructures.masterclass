class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
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
    if (this.length === 0) return undefined;
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
}
