function bubble(arr) {
    for(let j=0; j<arr.length; j++) {
        for(let i=0; i<arr.length-1 - j; i++) {
            const a = arr[i];
            const b = arr[i+1];
            console.log(arr, a, b);
            if(a > b) {
                const temp = b;
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

bubble([4,3,6,6,5,3,4,5,56,6,54,456,45,34,3456,345,31,1,2,324,6,7,6,45,3,2])