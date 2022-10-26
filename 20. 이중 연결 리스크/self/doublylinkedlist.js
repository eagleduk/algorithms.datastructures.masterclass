class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    else if (this.length === 1) {
      var result = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;

      return result;
    }
    var result = this.tail;
    this.tail = result.prev;

    this.tail.next = null;
    result.prev = null;

    this.length--;
    return result;
  }
  shift() {
    if (this.length === 0) return undefined;

    var result = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = result.next;
      this.head.prev = null;
    }
    result.next = null;
    this.length--;
    return result;
  }
  unshift(val) {
    var node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return -1;
    var half = this.length / 2;
    var result = null;
    if (index < half) {
      result = this.head;
      for (var i = 0; i < half; i++) {
        if (index === i) break;
        result = result.next;
      }
    } else {
      result = this.tail;
      for (var i = this.length - 1; i > half; i--) {
        if (index === i) break;
        result = result.prev;
      }
    }
    return result;
  }
}

var list = new DoublyLinkedList();
