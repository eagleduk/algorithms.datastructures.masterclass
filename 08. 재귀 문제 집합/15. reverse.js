
/**
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
**/

function reverse(str){
  // add whatever parameters you deem necessary - good luck!
    if(str.length === 0) return "";
    const index = str.length - 1;
    return str[index] + reverse(str.slice(0, index));
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'