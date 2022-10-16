function bubble(arr) {
    for(let j=0; j<arr.length; j++) {
        let swap = 0;
        for(let i=0; i<arr.length-1 - j; i++) {
            const a = arr[i];
            const b = arr[i+1];
            console.log(arr, a, b);
            if(a > b) {
                const temp = b;
                arr[i+1] = arr[i];
                arr[i] = temp;
                swap++;
            }
        }
        if(swap===0) break;
    }
    return arr;
}

// bubble([4,3,6,6,5,3,4,5,56,6,54,456,45,34,3456,345,31,1,2,324,6,7,6,45,3,2])

bubble([4444,1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 6, 7, 31, 34, 45, 45, 54, 56, 324, 345, 456, 3456])