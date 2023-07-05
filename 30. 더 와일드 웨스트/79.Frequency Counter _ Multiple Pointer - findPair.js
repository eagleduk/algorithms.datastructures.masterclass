function findPair(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === Math.abs(value)) return true;
    }
  }
  return false;
}
