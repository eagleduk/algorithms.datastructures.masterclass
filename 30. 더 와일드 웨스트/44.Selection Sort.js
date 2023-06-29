function selectionSort(arr, com) {
  // add whatever parameters you deem necessary - good luck!
  if (typeof com === "function") {
    return arr.sort(com);
  }
  return arr.sort((a, b) => a - b);
}
