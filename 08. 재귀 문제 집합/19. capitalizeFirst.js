
/**
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.
**/

function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
    if(arr.length===0) return [];
    const str = arr[0][0].toUpperCase() + arr[0].slice(1);
    return [str, ...capitalizeFirst(arr.slice(1))]
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']