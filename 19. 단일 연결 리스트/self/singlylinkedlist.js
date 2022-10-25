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
  // 새로운 값을 마지막에 추가한다.
  push(val) {
    var node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  // 제일 마지막 값의 연결을 제거하고 출력한다.
  pop() {
    if (this.length === 0) return undefined;
    var pre = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return pre;
    }
    while (pre.next.next) {
      pre = pre.next;
    }
    var last = pre.next;
    pre.next = null;
    this.tail = pre;
    this.length--;
    return last;
  }
  // 제일 앞에 있는 값의 연결을 제거하고 출력한다.
  shift() {
    if (this.length === 0) return undefined;
    var temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp;
    }
    this.head = temp.next;
    this.length--;
    return temp;
  }
  // 제일 앞에 새로운 값을 추가한다.
  unshift(val) {
    var node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    return this;
  }
  // index 에 있는 노드를 반환한다. 없으면 -1 을 반환한다.
  get(index) {
    if (index < 0) return -1;
    var counter = 0;
    var current = this.head;
    while (current && counter < index) {
      current = current.next;
      counter++;
    }
    return current === null ? -1 : current;
  }
}

var list = new SinglyLinkedList();

list.push("Hi");
list.push("Hello");
list.push("how");

console.log(list);
