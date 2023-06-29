function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  // good luck!

  var pivotValue = arr[0];

  arr.sort((a, b) => {
    if (typeof comparator === "function") {
      return comparator(a, b);
    } else {
      return a - b;
    }
  });
  return arr.indexOf(pivotValue);
}
