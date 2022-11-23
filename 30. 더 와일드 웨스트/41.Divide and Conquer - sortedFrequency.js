function sortedFrequency(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let length = arr.filter((value) => value === val).length;

  return length === 0 ? -1 : length;
}
