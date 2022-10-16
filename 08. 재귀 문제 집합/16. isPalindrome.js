
/**
function called isPalindrome which returns true if the string passed to it is a palindrome 
(reads the same forward and backward). Otherwise it returns false.
**/

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
    if(str.length<=1) return true;
    const start = str[0];
    const end = str[str.length-1];
    if(start === end) return isPalindrome(str.slice(1, str.length-1));
    else return false;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false