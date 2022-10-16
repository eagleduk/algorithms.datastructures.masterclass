/**
Write a recursive function called flatten which accepts an array of arrays 
and returns a new array with all values flattened.
**/

function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) return [];
    // 배열의 첫번째 요소 추출
    const first = arr[0];
    // 첫번째 요소가 숫자일 때,
    if(typeof first === "number") {
        return [first, ...flatten(arr.slice(1))];
    } 
    // 첫번째 요소가 배열일 때,
    else {
        return [...flatten(first), ...flatten(arr.slice(1))]
    }
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]