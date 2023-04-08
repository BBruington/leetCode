// Given two integer arrays nums1 and nums2, return the 
//maximum length of a subarray that appears in both arrays.

 

// Example 1:

// Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Explanation: The repeated subarray with maximum length is [3,2,1].
// Example 2:

// Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// Output: 5
// Explanation: The repeated subarray with maximum length is [0,0,0,0,0].

function getAllindexes(arr, val) {
  var indexes = [], k;
    for(k = 0; k < arr.length; k++)
        if (arr[k] === val)
            indexes.push(k);
    return indexes;
}

function findLength(nums1, nums2) {
  let maxLength = 0
  for(let i = 0; i<nums1.length; i++){
    if(nums2.includes(nums1[i])) {
      if(maxLength === 0) maxLength = 1
      let indexes = getAllindexes(nums2, nums1[i]);
      indexes.forEach(element => {
        let tempLength = 0;
        let k = i
        while(nums1[k] === nums2[element] && element < nums2.length){
          tempLength++
          if(tempLength > maxLength) {
            maxLength = tempLength
          }
          element++
          k++
        }
      });
    }
  }
  return maxLength;
};

console.log(findLength([0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,1,0,0]))