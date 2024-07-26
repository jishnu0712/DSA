const arr = [3, 2, 33, -1, 23, 123, 0, 1, 123, 3, 2, 1];

let n = arr.length;

function sort(arr) {
    for (let i = 1; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
}

sort(arr);
console.log(arr);