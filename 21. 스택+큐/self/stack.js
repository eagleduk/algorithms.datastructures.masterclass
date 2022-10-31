class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  pop() {
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
  push(val) {
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
    return this.length;
  }
}
