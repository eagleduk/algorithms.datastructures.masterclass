
/**
Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.
**/

function capitalizeWords(arr) {
    if(arr.length === 0) return [];
    return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))]
}

capitalizeWords(["i", "am", "learning", "resursion"])