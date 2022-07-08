//filter unique elements
function getFilterdArr(arr) {
    let map = {};
    let newArr = [];
    
    arr.forEach(element => {
       if(!map[element]) {
        map[element] = true;
        newArr.push(element)
       } 
    });
    return newArr;
}
console.log(getFilterdArr([1,1,2,2,33,3,4,5,4,2,2,1]));