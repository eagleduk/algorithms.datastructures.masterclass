class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    // 값을 맨 뒤에 삽입
    this.values.push(value);

    // 부모 노드와 비교
    var index = this.values.length - 1;
    while (index > 0) {
      var pIndex = Math.floor((index - 1) / 2);

      if (this.values[index] <= this.values[pIndex]) break;

      var temp = this.values[pIndex];
      this.values[pIndex] = this.values[index];
      this.values[index] = temp;
      index = pIndex;
    }
    return this.values;
  }
}

var heap = new MaxBinaryHeap();
