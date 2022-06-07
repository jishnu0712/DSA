const arr = [1, 2, 2, 2, 2, 3, 3, 3, 5, 5, 6, 7, 7, 8, 8, 8, 8];

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

console.log(countUniqueNumber([]));