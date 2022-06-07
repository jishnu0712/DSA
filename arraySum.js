const A = [-5, -4, -3, -1, 0, 1, 2, 6, 7, 8];

function findArraySum(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        }
        else if (sum < 0) {
            left++;
        }
        else {
            right--;
        }
    }
}

console.log(findArraySum(A));