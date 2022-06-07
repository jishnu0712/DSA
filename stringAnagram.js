const str1 = 'mannar';
const str2 = 'nnmraa';
//check length euality
//make obj with letter:occurance
//decrement occurence from obj for str2
function checkAnagram(str1,str2) {
    if(str1.length !== str2.length){
        return false;
    }
    const counter = {};
    for(let letter of str1){
        counter[letter] = (counter[letter] || 0) + 1;
    }
    console.log(counter)
    for(let letter of str2){
        if(!counter[letter]){
            return false;
        }
        counter[letter]-=1;
    }
    return true;
}

console.log(checkAnagram(str1,str2));