function checkAnagram(str1,str2) {
    if(str1.length !== str2.length){
        return false
    }
    const counter = {};
    for(let letter of str1){
        counter[letter] = (counter[letter] || 0) + 1;
    }
    for( let letter of str2) {
        if(!counter[letter]){
            return false
        }
        counter[letter] -= 1;
    }
    return true;
}

console.log(checkAnagram('hello','llheo'));