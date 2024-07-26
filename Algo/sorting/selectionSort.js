const arr = [3, 2, 33, -1, 23, 123, 0, 1, 123, 3, 2, 1];

function selectionSort(arr) {
    let n = arr.length;
    for( let i = 0; i < n - 1; i++) {
        let min_idx = i; //take i as min index
        for( let j = i + 1; j < n; j++) {
            if(arr[j] < arr[min_idx]) {
                min_idx = j; //find lower values
            }
        }
        if(min_idx !== i) {
            [arr[i],arr[min_idx]] = [arr[min_idx],arr[i]]; //swap
        }
    }
}

selectionSort(arr);
console.log(arr);