
/**
Write a function called collectStrings which accepts an object 
and returns an array of all the values in the object that have a typeof string
**/

function collectStrings(obj) {
    if(obj === null) return [];

    let result = [];
    for(const [key, value] of Object.entries(obj)) {
        if(typeof(value) === "string") {
            result.push(value);
        } else {
            result = result.concat(collectStrings(value));
        }
    }
    return result;
}
