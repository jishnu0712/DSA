function checkSum(arr, num) {
    if (num > arr) {
        throw Error('number is > array length');
    }
    let max = 0
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

const sum = checkSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(sum);