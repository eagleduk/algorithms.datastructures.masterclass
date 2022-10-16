function selection(arr) {
    for(let i=0; i<arr.length-1; i++) {
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++) {
            minIndex = arr[minIndex] < arr[j] ? minIndex : j;
        }
        if(minIndex !== i) {
            const temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

selection([4,3,6,6,5,3,4,5,56,6,54,456,45,34,3456,345,31,1,2,324,6,7,6,45,3,2])