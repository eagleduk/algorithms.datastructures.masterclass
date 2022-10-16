
/**
Write a function called isSubsequence which takes in two strings and checks whether 
the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear 
somewhere in the second string, without their order changing.

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
**/

function isSubsequence(a,b) {
  // good luck. Add any arguments you deem necessary.
    if(a.length===0 || b.length===0 || a.length > b.length) return false;

    let aIndex = 0;

    for(let bIndex=0; bIndex<b.length; bIndex++) {
        
        const aValue = a[aIndex];
        const bValue = b[bIndex];

        if(a[aIndex+1] === undefined) return true;
        if(aValue === bValue) aIndex += 1;
    }
    

    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)