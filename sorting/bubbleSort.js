function bubbleSort(arr) {
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
                swapped = true;
            }
        }
        
    } while (swapped);

    return arr;
}

let array = [5, 3, 8, 4, 2];
console.log("Unsorted array:", array);
console.log("Sorted array:", bubbleSort(array));