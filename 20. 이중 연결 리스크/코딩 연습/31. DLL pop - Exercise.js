/**
Implement the following on the DoublyLinkedList class

pop

This function should remove a node at the end of the DoublyLinkedList. 
It should return the node removed.
**/

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
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  unshift(val) {
    var node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
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
      result.next = null;
    }

    this.length--;
    return result;
  }
  set(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) this.head.val = val;
    else if (index === this.length) this.tail.val = val;
    else {
      var half = this.length / 2;
      var target = null;
      if (index < half) {
        target = this.head.next;
        for (var i = 1; i < index; i++) {
          target = target.next;
        }
      } else {
        target = this.tail.prev;
        for (var i = this.length - 2; i > index; i--) {
          target = target.prev;
        }
      }
      target.val = val;
    }
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    var target = null;
    if (index === 0) target = this.head;
    else if (index === this.length - 1) target = this.tail;
    else {
      var half = this.length / 2;
      var target = null;
      if (index < half) {
        target = this.head.next;
        for (var i = 1; i < index; i++) {
          target = target.next;
        }
      } else {
        target = this.tail.prev;
        for (var i = this.length - 2; i > index; i--) {
          target = target.prev;
        }
      }
      var prev = target.prev;
      var next = target.next;

      prev.next = next;
      next.prev = prev;

      target.prev = null;
      target.next = null;

      this.length--;
    }
    return target;
  }
  pop() {
    if (this.length === 0) return undefined;
    var result = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
    }
    result.prev = null;
    this.length--;
    return result;
  }
}
