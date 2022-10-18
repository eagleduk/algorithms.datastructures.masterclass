let arr = [
  4, 3, 6, 6, 5, 3, 4, 5, 56, 6, 54, 456, 45, 34, 3456, 345, 31, 1, 2, 324, 6,
  7, 6, 45, 3, 2,
];

function pivot(arr, start = 0, end = arr.length) {
  function swap(arr, targetIndex, sourceIndex) {
    [arr[targetIndex], arr[sourceIndex]] = [arr[sourceIndex], arr[targetIndex]];
  }
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      // swap+1 이후 swap
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quick(arr) {
  if (arr.length < 2) return arr;
  const pivotIndex = pivot(arr);
  const left = arr.slice(0, pivotIndex);
  const right = arr.slice(pivotIndex + 1);
  return [...quick(left), arr[pivotIndex], ...quick(right)];
}
const result = quick(arr);

console.log(result);
