function minCoinChange(coins, amount) {
  coins.sort((a, b) => b - a);

  var result = [];

  var index = 0;
  var value;
  while (amount > 0) {
    value = coins[index];
    if (amount >= value) {
      result.push(value);
      amount = amount - value;
    } else {
      index = index + 1;
    }
  }
  return result;
}
