
/**
Write a function called stringifyNumbers which takes in an object 
and finds all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!
**/

function stringifyNumbers(obj) {
    let result = {};
     for(let [key, value] of Object.entries(obj)) {
         // value 타입이 number 일 때,
         if(typeof(value) === "number") {
             result = Object.assign(result, {[key]: String(value)})
         }
         // value 타입이 object 일 때,
         else if(typeof(value) === "object") {
             // value 가 배열일 때,
             if(Array.isArray(value)) {
                 result = Object.assign(result, {[key]: value})
             } else {
                 result = Object.assign(result, {[key]: stringifyNumbers(value)})
             }
         }
         // 그 외일 때,
         else {
             result = Object.assign(result, {[key]: value})
         }
     }
    return result;
}

/*
let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
*/