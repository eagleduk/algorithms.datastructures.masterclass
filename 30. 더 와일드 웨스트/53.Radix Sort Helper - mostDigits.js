function digitCount(num) {
  // using this function may be helpful. good luck!
  return String(num).length;
}

function mostDigits(nums) {
  // good luck!
  var max = 0;
  var temp = max;
  nums.forEach((num) => {
    temp = digitCount(num);
    if (max < temp) max = temp;
  });
  return max;
}
