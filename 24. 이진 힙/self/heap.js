class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    // 값을 맨 뒤에 삽입
    this.values.push(value);

    // 부모 노드와 비교
    let index = this.values.length - 1;
    while (index > 0) {
      let pIndex = Math.floor((index - 1) / 2);

      if (this.values[index] <= this.values[pIndex]) break;

      let temp = this.values[pIndex];
      this.values[pIndex] = this.values[index];
      this.values[index] = temp;
      index = pIndex;
    }
    return this.values;
  }
  remove() {
    if (!this.value.length) return undefined;
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

      let temp;
      if (value < lValue && value < rValue) {
        if (lValue < rValue) {
          this.values[rChildIdx] = value;
          this.values[idx] = rValue;
          idx = rChildIdx;
        } else {
          this.values[lChildIdx] = value;
          this.values[idx] = lValue;
          idx = lChildIdx;
        }
      } else if (value < lValue) {
        this.values[lChildIdx] = value;
        this.values[idx] = lValue;
        idx = lChildIdx;
      } else if (value < rValue) {
        this.values[rChildIdx] = value;
        this.values[idx] = rValue;
        idx = rChildIdx;
      } else break;
    }
    return result;
  }
}

var heap = new MaxBinaryHeap();
