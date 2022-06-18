//check square in another array
// arr1=[1,2,3,4], arr2=[1,9,4,16]
//arr1 = [1,2,4,2], arr2=[1,4,4,16]

//1. make map of items:frwquency in arr1
//map1= {1:1,2:1,3:1,4:1}  
//map2 = {1:1,4:1,9:1,16:1}

function checkSquare(arr1, arr2) {
    const map1 = {};
    const map2 = {};
    for (element of arr1) {
        map1[element] = (map1[element] || 0) + 1;
    }
    //console.log(map1);
    for (item of arr2) {
        map2[item] = (map2[item] || 0) + 1;
    }
    //console.log(map2);
    for (let key in map1) {
        const map2key = key * key;

        if (!map2[map2key]) {
            return false;
        }
        if (map1[key] !== map2[map2key]) {
            return false;
        }
    }
    return true;
}
console.log(checkSquare([1, 2, 2, 3, 4], [1, 4, 9, 16]))