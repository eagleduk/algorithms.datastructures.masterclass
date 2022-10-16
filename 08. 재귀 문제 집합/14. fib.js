
/**
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
and where every number thereafter is equal to the sum of the previous two numbers.
**/

/**
피보나치 수열
값이 0 일때는 결과가 0
값이 1,2 일때는 결과가 1
n 일때에는 피보나치 n-1 + 피보나치 n-2 값이 된다.

피보나치'1' -> 1
피보나치'2' -> 1
피보나치'3' -> 피보나치'2' + 피보나치'1' -> 1 + 1 -> 2
피보나치'4' -> 피보나치'3' + 피보나치'2' -> 1 + 2 -> 3
피보나치'5' -> 피보나치'4' + 피보나치'3' -> 3 + 2 -> 5
피보나치'6' -> 피보나치'5' + 피보나치'4' -> 5 + 3 -> 8
피보나치'n' -> 피보나치'n-1' + 피보나치'n-2' 
            -> 피보나치'n-1-1' + 피보나치'n-1-2' + 피보나치'n-2-1' + 피보나치'n-2-2' -> ....

**/

function fib(num){
  // add whatever parameters you deem necessary - good luck!
    if(num === 0) return 0;
    if(num === 1) return 1;
    return fib(num-1) + fib(num-2);
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465