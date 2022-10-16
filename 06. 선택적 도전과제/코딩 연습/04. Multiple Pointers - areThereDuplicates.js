
/**
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
**/

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
    const obj = {};
    for(let i=0; i<args.length; i++) {
        const v = args[i];
        if(obj[v]) return true;
        else obj[v] = v;
    }
    return false;
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 