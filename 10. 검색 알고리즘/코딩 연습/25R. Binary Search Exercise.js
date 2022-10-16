function binarySearch(arr, value){
  // add whatever parameters you deem necessary - good luck!
    let start = 0, end = arr.length-1;
    if(arr[start] > value || arr[end] < value) return -1;
    while(start <= end) {
        let middle = Math.floor(((end + start) / 2));
        if(arr[middle] === value) return middle;
        else if(arr[middle] > value) end = middle - 1;
        else start = middle + 1;
    }
    return -1;
}

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
    10) // 2
binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
    95) // 16
binarySearch(
    [5, 6, 10, 13, 14, 18, 30, 34, 35, 37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 
    100) // -1