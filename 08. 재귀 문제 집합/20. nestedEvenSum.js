function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
    let result = 0;
    for(const [key, value] of Object.entries(obj)) {
        // value 값이 object 일 때,
        if(typeof(value) === "object") {
            result += nestedEvenSum(value);
        }
        // value 값이 number 일 때,
        if(typeof(value) === "number") {
            // 짝수인지 아닌지 판별
            if(value % 2 === 0) result += value;
        }
    }
    return result;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10