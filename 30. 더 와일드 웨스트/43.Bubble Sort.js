function bubbleSort(arr, comparator) {
  // add whatever parameters you deem necessary - good luck!
  if (typeof comparator !== "function") {
    // provide a default
    return arr.sort((a, b) => a - b);
  } else {
    return arr.sort(comparator);
  }
}
