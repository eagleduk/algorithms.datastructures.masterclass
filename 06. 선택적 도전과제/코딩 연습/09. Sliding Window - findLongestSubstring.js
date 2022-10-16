/**
Write a function called findLongestSubstring, 
which accepts a string and returns the length of the longest substring with all distinct characters.

Time Complexity - O(n)
**/

function findLongestSubstring(string){
  // add whatever parameters you deem necessary - good luck!
    if(string.length === 0) return 0;

  let start=0, end=0, max=-Infinity, count=0;
  let breakpoint = 0;
  const obj = {};
  while(end<string.length && breakpoint<=1000) {
    //console.log(`start: ${start}, vv: ${string[start]}, end: ${end}, v: ${string[end]}, obj: ${JSON.stringify(obj)}, max: ${max}, length: ${end-start}`)
    const v = string[end];
    //console.log(start, string[start], end, string[end], obj);
    
    // 값이 있으면 obj 값을 0으로 변경 하고 start 값을 하나 더한다.
    if(obj[v] === 1) {
     const vv = string[start];
      obj[vv] = 0;
      start++;
    } 
    // 값이 없으면 [obj] = 1 을 저장한다.
    else {
      obj[v] = 1;
      end++;
      max = max > end-start ? max : end-start;
    }
    breakpoint++;
  }
  return max;
}


console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome'));// 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring') );// 8
console.log(findLongestSubstring('thisishowwedoit')); // 6