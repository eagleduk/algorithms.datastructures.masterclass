
/**
Given an array of integers and a number, 
write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, 
but [100, 300] is not.

Time Complexity - O(N)

Space Complexity - O(1)
**/

function maxSubarraySum(arr, length){
  // add whatever parameters you deem necessary - good luck!

    if(arr.length < length) return null;
    
    let max = -Infinity;
    let temp = 0;

    let start = 0;
    let end = length;
    for(let i=start; i<end; i++) {
        temp += arr[i];
    }
    max = temp;

    for(let i=end; i<arr.length; i++) {
        const pre = arr[i-length];
        const post = arr[i];
        temp = temp - pre + post;
        max = max < temp ? temp : max;
    }

    return max;
}