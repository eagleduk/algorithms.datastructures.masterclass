function merge(arr, com) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 1) return arr;

  const half = arr.length / 2;

  const left = merge(arr.slice(0, half), com);
  const right = merge(arr.slice(half), com);

  let result = [];
  let a1, a2;
  while (left.length && right.length) {
    a1 = left[0];
    a2 = right[0];
    if (typeof com === "function") {
      com(a1, a2) > 0 ? result.push(right.shift()) : result.push(left.shift());
    } else {
      a1 > a2 ? result.push(right.shift()) : result.push(left.shift());
    }
  }

  if (left.length) result = [...result, ...left];
  if (right.length) result = [...result, ...right];

  return result;
}

function mergeSort(arr, com) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length) return merge(arr, com);
  return [];
}
