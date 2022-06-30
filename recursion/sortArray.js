function isSorted(array) {
    for(let i = 0; i < array.length; i++) {
        if( array[i] > array[i+1] ) {
            return false;
        }
    }
    return true;
}

let i = 0;
let j = 1;
let myNewArr = [];

function recursiveSort(array) {
    if(isSorted(array)) {
        myNewArr = array;
        return;
    }
    else if( array[i] < array[j] ) {
        i++;
        j++;
        recursiveSort(array);
    }
    else {
        [array[i], array[j]] = [array[j], array[i]];
        i = 0;
        j = 1;
        recursiveSort(array);
    }
}

recursiveSort([2,4,5,6,1,23,0,-34]);
console.log(myNewArr);