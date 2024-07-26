/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let n1 = a.length - 1;
    let n2 = b.length - 1;
    let result = "";
    let carry = 0;
 
    while (n1 >= 0 || n2 >= 0 || carry !== 0) {
         let sum = carry;
 
         if (n1 >= 0) {
             sum += parseInt(a[n1])
             n1--
         }
 
         if (n2 >= 0) {
             sum += parseInt(b[n2])
             n2--
         }
 
         carry = Math.floor(sum / 2)
         result = (sum % 2) + result
         
    } 
 
    return result;
 };