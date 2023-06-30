function getDigit(num, i) {
  // good luck!
  var str = String(num);
  if (str.length - 1 < i) return 0;
  return +str.split("").reverse()[i];
}
