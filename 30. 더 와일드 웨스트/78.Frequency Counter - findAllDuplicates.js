function findAllDuplicates(arr) {
  // add whatever parameters you deem necessary - good luck!

  var temp = [],
    result = [];
  arr.forEach((v) => (temp[v] ? (temp[v] += 1) : (temp[v] = 1)));
  temp.forEach((t, index) => {
    if (t === 2) result.push(index);
  });
  return result;
}
