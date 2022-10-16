function insertion(arr) {
    for(let i=1; i<arr.length; i++) {
        let value = arr[i];
        let j = i-1;
        for(j; j>=0 && value < arr[j]; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = value;
    }
    return arr;
}

//insertion([4,3,6,6,5,3])

insertion([4,3,6,6,5,3,4,5,56,6,54,456,45,34,3456,345,31,1,2,324,6,7,6,45,3,2])