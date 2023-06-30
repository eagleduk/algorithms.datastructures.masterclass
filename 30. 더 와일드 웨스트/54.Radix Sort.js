function getDigit(num, i) {
  var str = String(num);
  if (str.length - 1 < i) return 0;
  return +str.split("").reverse()[i];
}

function digitCount(num) {
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

function radixSort(nums) {
  // good luck!
  var maxLength = mostDigits(nums);

  var temp;

  for (var digit = 0; digit < maxLength; digit++) {
    temp = Array(10).fill(Array(0));
    for (var i = 0; i < nums.length; i++) {
      var value = nums[i];
      var indexValue = getDigit(value, digit);
      temp[indexValue] = [...temp[indexValue], value];
    }
    nums = [].concat(...temp);
  }
  return nums;
}
