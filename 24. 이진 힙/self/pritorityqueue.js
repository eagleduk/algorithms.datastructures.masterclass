class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let node = new Node(value, priority);
    // 값을 맨 뒤에 삽입
    this.values.push(node);

    // 부모 노드와 비교
    let index = this.values.length - 1;
    while (index > 0) {
      let pIndex = Math.floor((index - 1) / 2);

      if (priority > this.values[pIndex].priority) break;

      this.values[index] = this.values[pIndex];
      this.values[pIndex] = node;
      index = pIndex;
    }
    return this;
  }
  dequeue() {
    if (!this.values.length) return undefined;
    if (this.values.length === 1) return this.values.pop();
    // root 제거
    let result = this.values[0];
    // 마지막 값을 root로 이동
    this.values[0] = this.values.pop();

    let idx = 0;
    while (true) {
      let lChildIdx = idx * 2 + 1;
      let rChildIdx = idx * 2 + 2;

      let value = this.values[idx];
      let lValue = this.values[lChildIdx];
      let rValue = this.values[rChildIdx];

      if (
        value?.priority > lValue?.priority &&
        value?.priority > rValue?.priority
      ) {
        if (lValue?.priority > rValue?.priority) {
          this.values[rChildIdx] = value;
          this.values[idx] = rValue;
          idx = rChildIdx;
        } else {
          this.values[lChildIdx] = value;
          this.values[idx] = lValue;
          idx = lChildIdx;
        }
      } else if (value?.priority > lValue?.priority) {
        this.values[lChildIdx] = value;
        this.values[idx] = lValue;
        idx = lChildIdx;
      } else if (value?.priority > rValue?.priority) {
        this.values[rChildIdx] = value;
        this.values[idx] = rValue;
        idx = rChildIdx;
      } else break;
    }
    return result;
  }
}

var queue = new PriorityQueue();
