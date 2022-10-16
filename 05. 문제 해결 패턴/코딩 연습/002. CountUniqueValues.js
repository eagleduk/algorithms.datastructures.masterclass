
/**
Implement a function called countUniqueValues, 
which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.

Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.
**/

function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  
  // arr into obj
  const result = {};
  for(let i=0; i<arr.length; i++) result[arr[i]] = i;
  // count obj keys
  const count = Object.keys(result).length;

    console.log(result, count);
  //return count;
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

/*

배열의 값을 객체의 키로 저장 후 객체의 길이를 반환.
배열이 정렬되어 있지 않아도 사용 가능.

반복문이 한번 사용했으니 시간 복잡도는 O(n)
하지만 Object.keys 에 따른 시간복잡도가 들어가지 않을까?

*/