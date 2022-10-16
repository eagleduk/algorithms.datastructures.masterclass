function countUniqueValues(arr){
    if(arr.length ===0 ) console.log(0);
    let i=0;
    for(let j=1; j<arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    console.log(i + 1);
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

/*

포인터 두개를 이용하여 유일한 값을 배열 앞으로 배치하는 것.
배열이 정렬되어 있어야 사용이 가능하다.

반복문이 한번 사용 되었으니 시간복잡도는 O(n)

*/