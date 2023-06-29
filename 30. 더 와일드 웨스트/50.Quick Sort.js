function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivotValue = arr[start];
  var index = start;

  for (var i = start + 1; i < arr.length; i++) {
    var target = arr[i];
    if (typeof comparator === "function") {
      if (comparator(pivotValue, target) > 0) {
        index += 1;
        // swap
        swap(arr, index, i);
      }
    } else {
      if (pivotValue > target) {
        index += 1;
        // swap
        swap(arr, index, i);
      }
    }
  }

  swap(arr, start, index);
  return index;
}

function quickSort(arr, comparator) {
  if (arr.length <= 1) return arr;

  var pivotValue = pivot(arr, comparator);

  return [
    ...quickSort(arr.slice(0, pivotValue), comparator),
    arr[pivotValue],
    ...quickSort(arr.slice(pivotValue + 1), comparator),
  ];
}
