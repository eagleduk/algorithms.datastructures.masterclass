
/**
Write a function called sameFrequency. 
Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
**/

function sameFrequency(a, b){
  // good luck. Add any arguments you deem necessary.
  const obj = {};
  
  // 입력값[1]을 key값으로 하는 객체 생성
  const a0 = String(a);
  for(let i=0; i<a0.length; i++) {
      const v = a0[i];
      obj[v] ? obj[v] += 1 : obj[v] = 1;
  }
    
  // 입력값을 key값으로 하는 객체에 입력값[2]의 값이 존재하는지 확인
  const b0 = String(b);
  for(let i=0; i<b0.length; i++) {
      const v = b0[i];
      if(obj[v] && obj[v] > 0) {
          obj[v] -= 1;
      } else {
          return false;
      }
  }
    return true;
}

console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false