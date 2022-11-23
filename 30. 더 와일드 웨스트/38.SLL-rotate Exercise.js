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
    if (index >= this.length) return false;

    if (index === 0) {
      this.head.val = val;
    } else if (index === this.length - 1) {
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
  shift(val) {
    var node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  insert(index, val) {
    if (index > this.length) return false;

    if (index === 0) {
      this.shift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      var node = new Node(val);
      var target = this.get(index - 1);
      if (!target) return false;
      node.next = target.next;
      target.next = node;
      this.length++;
    }
    return true;
  }
  remove(index) {
    if (index > this.length - 1) return undefined;
    var result;
    if (index === 0) {
      result = this.head;
      this.head = result.next;
      this.length--;
      return result;
    }
    var prev = this.get(index - 1);
    result = prev.next;
    var next = result.next;

    prev.next = next;
    this.length--;
    result.next = null;

    return result;
  }
  rotate(index) {
    if (this.length === 0) return null;

    const reverse = index < 0;

    let target;
    for (let i = 0; i < Math.abs(index) % this.length; i++) {
      if (reverse) {
        target = this.pop();
        this.shift(target.val);
      } else {
        target = this.head;
        this.head = target.next;
        this.tail.next = target;
        this.tail = target;
        this.tail.next = null;
      }
    }
  }
}
