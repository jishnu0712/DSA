//count unique elements in array
//set i=0,j=1
//while arr[i]===arr[j], increment j
//if(arr[i]!==arr[j]), increment j,put the value of arr[i ] in arr[j]
// return i+1


const countUniqueNumber = (array) => {
    if (array.length === 0) {
        throw Error('empty array');
    }
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if(array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return (i+1);
}
const arr = [1, 2, 2, 2, 2, 3, 3, 3, 5, 5, 6, 7, 7, 8, 8, 8, 8];
console.log(countUniqueNumber(arr));