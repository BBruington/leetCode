// Given an array of integers nums and an integer k, return the total number 
// of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.


// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

//inefficient way
const subarraySumSlow = function(nums, k) {
  let totalSums = 0;
  for(let i=0; i< nums.length; i++){
    if(nums[i]===k) {
      totalSums = totalSums + 1;
    }
    let tempSum = nums[i];
    let j=i+1;
    while(j < nums.length) {
      tempSum = tempSum + nums[j]
      if(tempSum === k) totalSums = totalSums + 1;
      j++
    }
  }

  return totalSums;
};