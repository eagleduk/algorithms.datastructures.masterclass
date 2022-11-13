// function fib(n, memo = []) {
//   if (memo[n] !== undefined) return memo[n];
//   if (n <= 2) return 1;
//   var res = fib(n - 2, memo) + fib(n - 1, memo);
//   meno[n] = res;
//   return res;
// }

function fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  var res = fib(n - 2, memo) + fib(n - 1, memo);
  meno[n] = res;
  return res;
}
