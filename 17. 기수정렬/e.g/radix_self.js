let arr = [
  4, 3, 6, 6, 5, 3, 4, 5, 56, 6, 54, 456, 45, 34, 3456, 345, 31, 1, 2, 324, 6,
  7, 6, 45, 3, 2,
];

function getDigit(num, digit) {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

function countDigit(num) {
  return Math.abs(num).toFixed().length;
}

function getMaxDigitCount(arr) {
  let max = -Infinity;
  arr.forEach((ar) => {
    const c = countDigit(ar);
    max = c > max ? c : max;
  });
  return max;
}

function radix(arr, start = 0, maxDigit = undefined) {
  if (start === maxDigit) return arr;
  const max = maxDigit === undefined ? getMaxDigitCount(arr) : maxDigit;
  const result = [[], [], [], [], [], [], [], [], [], []];
  for (let i = 0; i < arr.length; i++) {
    const v = getDigit(arr[i], start);
    result[v].push(arr[i]);
  }
  return radix(result.flat(), start + 1, max);
}

console.log(radix(arr));
