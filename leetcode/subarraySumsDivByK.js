// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

var subarraysDivByK = function(nums, k) {
  let counter = 0;
  for(let i=0; i < nums.length; i++){
    let localSum = 0;
    for(let j=i; j < nums.length; j++) {
      localSum += nums[j];
      if(localSum%k==0 || localSum%k==-0) counter++;
    }
  }
  return counter;
};
var subarraysDivByK2 = function(nums, k) {
  let globalSum = []
  let localSum = nums[0];
  for(let i=1; i < nums.length; i++){
    
  }
  return counter;
};

console.log(subarraysDivByK([4,5,0,-2,-3,1], 5))