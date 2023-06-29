function merge(ar1, ar2, comparator) {
  // add whatever parameters you deem necessary - good luck!
  const arr1 = [...ar1];
  const arr2 = [...ar2];

  const result = [];
  let a1, a2;
  while (arr1.length && arr2.length) {
    a1 = arr1[0];
    a2 = arr2[0];
    if (typeof comparator === "function") {
      if (comparator(a1, a2) < 0) {
        result.push(a1);
        arr1.shift();
      } else {
        result.push(a2);
        arr2.shift();
      }
    } else {
      if (a1 > a2) {
        result.push(a2);
        arr2.shift();
      } else {
        result.push(a1);
        arr1.shift();
      }
    }
  }
  if (arr1.length) {
    while (arr1.length) result.push(arr1.shift());
  }
  if (arr2.length) {
    while (arr2.length) result.push(arr2.shift());
  }
  return result;
}
