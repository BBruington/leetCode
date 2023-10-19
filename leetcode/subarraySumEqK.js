// Given an array of integers nums and an integer k, return the total number 
// of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.



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

const subArraySum = function(nums, k) {
  let hashMap = new Map();
  let sum = 0;
  let totalSums = 0;
  hashMap.set(0,1);
  for (let i=0;i<nums.length;i++) {
    //add to sum as you move to the right
    sum += nums[i];
    //if the hashMap has a number that could be added to sum to equal k add a subbarray
    if (hashMap.has(sum-k)) totalSums += hashMap.get(sum-k);
    //if the hashMap has a value with the key sum, set it's value to itself + 1
    if (hashMap.has(sum)) hashMap.set(sum, hashMap.get(sum)+1);
    else hashMap.set(sum, 1);
  }
  return totalSums;
}
// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2