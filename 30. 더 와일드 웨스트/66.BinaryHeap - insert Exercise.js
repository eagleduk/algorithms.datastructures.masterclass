class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);

    var currentIndex = this.values.length - 1;

    while (currentIndex > 0) {
      var parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.values[parentIndex] < this.values[currentIndex]) {
        this.values[currentIndex] = this.values[parentIndex];
        this.values[parentIndex] = value;
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }
}
