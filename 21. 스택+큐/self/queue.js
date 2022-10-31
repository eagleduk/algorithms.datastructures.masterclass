class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // 새로운 값을 마지막에 추가한다.
  enqueue(val) {
    var node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size += 1;
    return this.size;
  }
  // 제일 앞에 있는 값의 연결을 제거하고 출력한다.
  dequeue() {
    if (this.size === 0) return undefined;
    var temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return temp;
    }
    this.first = temp.next;
    this.size--;
    return temp.val;
  }
}
