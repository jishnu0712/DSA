function maxHeapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        maxHeapify(arr, n, largest);
    }
}

function buildMaxHeap(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, n, i);
    }
}

function heapSort(arr) {
    buildMaxHeap(arr);

    let n = arr.length;

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        maxHeapify(arr, i, 0);
    }

    return arr;
}

let arr = [12, 11, 13, 5, 6, 7, -2, 2, 1, 1, 0, -1];
console.log(heapSort(arr));