// Given two strings s and t, determine
//  if they are isomorphic.

// Two strings s and t are isomorphic 
// if the characters in s can be replaced to get t.

// All occurrences of a character must 
// be replaced with another character 
// while preserving the order of characters.
//  No two characters may map to the 
//  same character, but a character may map to itself.


 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if( s.length != t.length ) {
        return false;
    }
    const map1 = {};
    const map2 = {};
    
    for( let i = 0; i < s.length; i++ ) {
        if( map1[s[i]] !== map2[t[i]] ) {
            return false;
        }else{
            map1[s[i]] = i;
            map2[t[i]] = i;
        }
    }
    //console.log(map1,map2)
    return true;
};