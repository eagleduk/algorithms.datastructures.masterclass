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

  extractMax() {
    var currentIndex = 0;

    var left, right, temp, value;
    while (currentIndex < this.values.length - 1) {
      left = currentIndex * 2 + 1;
      right = currentIndex * 2 + 2;

      if (this.values[left] < this.values[right]) {
        temp = right;
      } else {
        temp = left;
      }
      value = this.values[currentIndex];
      this.values[currentIndex] = this.values[temp];
      this.values[temp] = value;

      currentIndex = temp;
    }
    this.values = [
      ...this.values.slice(0, currentIndex),
      ...this.values.slice(currentIndex + 1),
    ];
  }
}
