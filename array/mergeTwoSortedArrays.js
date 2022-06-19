/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
      while (j >= 0 && i >= 0) {
          nums1[k--] = ( nums1[i] > nums2[j] )
              ?  nums1[i--] 
              :  nums2[j--];
       }
      
      while( j >= 0 ){
          nums1[k--] = nums2[j--];
      }
  };
  
    // nums1[k--] = ( i >= 0 && nums1[i]  > nums2[j] )
    //       ? nums1[i--] 
    //       : nums2[j--];
  
  //    1st soluion 
  //    let i=0;
  //     let j=0;
  //     let temp = [];
  //     while ( i < m  && j < n ) {
  //         if(nums1[i] < nums2[j]) {
  //             temp.push(nums1[i]);
  //             i++;
  //         }else {
  //             temp.push(nums2[j]);
  //             j++;
  //         }
  //     }
  //     while(i < m){
  //         temp.push(nums1[i]);
  //         i++;
  //     }
  //     while(j < n){
  //         temp.push(nums2[j]);
  //         j++;
  //     }
  //     for(let e in temp) {
  //         nums1[e] = temp[e];
  //     }