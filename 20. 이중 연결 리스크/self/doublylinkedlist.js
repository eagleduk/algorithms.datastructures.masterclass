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
  print() {
    var result = [];
    var current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result);
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
  set(index, val) {
    var node = this.get(index);
    if (node === -1) return false;

    node.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) this.unshift(val);
    else if (index === this.length) this.push(val);
    else {
      var node = new Node(val);
      var next = this.get(index);
      var prev = next.prev;

      prev.next = node;
      node.prev = prev;

      next.prev = node;
      node.next = next;
      this.length++;
    }
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var target = this.get(index);
    var prev = target.prev;
    var next = target.next;

    prev.next = next;
    next.prev = prev;

    target.next = null;
    target.prev = null;
    this.length--;
    return target;
  }
}

var list = new DoublyLinkedList();
