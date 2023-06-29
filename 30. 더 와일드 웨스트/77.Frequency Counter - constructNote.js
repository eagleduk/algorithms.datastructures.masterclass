function constructNote(var1, var2) {
  console.log(var1, var2);
  // add whatever parameters you deem necessary - good luck!

  var temp1 = {},
    temp2 = {};

  for (var i = 0; i < var2.length; i++) {
    if (temp2[var2[i]]) temp2[var2[i]] = temp2[var2[i]] + 1;
    else temp2[var2[i]] = 1;
  }

  for (var i = 0; i < var1.length; i++) {
    if (!temp2[var1[i]] || temp2[var1[i]] === 0) return false;
    temp2[var1[i]] = temp2[var1[i]] - 1;
  }

  return true;
}
