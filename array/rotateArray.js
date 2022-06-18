var rotate = function (nums, k) {
    let len = nums.length;
    k = k % len;
    //reverse first len - k elements
    reverse(nums, 0, len - k - 1);
    //reverse last k elements
    reverse(nums, len - k, len - 1)
    //reverse whole arr
    reverse(nums, 0, len - 1)
};

function reverse(arr, i, j) {
    let temp;
    while (i <= j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3)
console.log(arr);