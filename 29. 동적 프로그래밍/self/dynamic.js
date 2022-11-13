const result = [1, 1];

function fibonacci(n) {
  let length;
  while (result.length < n && length < 100) {
    length = result.length;
    result.push(result[length - 2] + result[length - 1]);
  }
  return result[n];
}

fibonacci(100);
