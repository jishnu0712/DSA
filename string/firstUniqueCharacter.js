/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const memory = {};
    for(let i = 0; i < s.length; i++){
      memory[s[i]] = {val:( memory[s[i]] || 0 ) + 1,index:i};
    }
     for(let item in memory) {
         if(memory[item].val === 1) {
             return memory[item].index
         }
     }
    return -1;
    
};