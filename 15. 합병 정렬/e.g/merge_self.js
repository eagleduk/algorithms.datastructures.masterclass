const arr = [
  4, 3, 6, 6, 5, 3, 4, 5, 56, 6, 54, 456, 45, 34, 3456, 345, 31, 1, 2, 324, 6,
  7, 6, 45, 3, 2,
];

function merge(arr1, arr2) {
  let result = [];
  let a1 = 0,
    a2 = 0;
  while (a1 < arr1.length && a2 < arr2.length) {
    if (arr1[a1] < arr2[a2]) {
      result.push(arr1[a1]);
      a1++;
    } else {
      result.push(arr2[a2]);
      a2++;
    }
  }
  result = [...result, ...arr1.slice(a1), ...arr2.slice(a2)];
  console.log(result);
  return result;
}

function sort(arr) {
  if (arr.length < 2) return arr;
  return merge(
    sort(arr.slice(0, arr.length / 2)),
    sort(arr.slice(arr.length / 2))
  );
}

const result = sort(arr);

console.log(arr.length, result.length, result);
