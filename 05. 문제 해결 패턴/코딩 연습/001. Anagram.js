
/**
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, 
formed from iceman.

Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
**/

function validAnagram(a, b){
  // add whatever parameters you deem necessary - good luck!
  
  // 두 입력값의 길이 비교
  if(a.length !== b.length) return false;
  
  // 각각 문자열에 대한 횟수를 기록하는 객체 생성
  const aObj = {};
  for(let i=0; i<a.length; i++) {
      const spell = a[i]
      aObj[spell] = aObj[spell] ? aObj[spell] + 1 : 1;
  }
  const bObj = {};
  for(let i=0; i<b.length; i++) {
      const spell = b[i]
      bObj[spell] = bObj[spell] ? bObj[spell] + 1 : 1;
  }
  
  // 두 객체의 키와 값을 비교
  for(const spell in aObj ) {
      if(!bObj[spell]) return false;
      const value = aObj[spell];
      if(value !== bObj[spell]) return false;
  }
  return true;
}

console.log("","", validAnagram('', '')) // true
console.log('aaz', 'zza', validAnagram('aaz', 'zza')) // false
console.log('anagram', 'nagaram', validAnagram('anagram', 'nagaram')) // true
console.log("rat","car", validAnagram("rat","car")) // false) // false
console.log('awesome', 'awesom', validAnagram('awesome', 'awesom')) // false
console.log('amanaplanacanalpanama', 'acanalmanplanpamana', validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log('qwerty', 'qeywrt', validAnagram('qwerty', 'qeywrt')) // true
console.log('texttwisttime', 'timetwisttext', validAnagram('texttwisttime', 'timetwisttext')) // true