// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

var subarraysDivByK = function(nums, k) {
  let counter = 0;
  for(let i=0; i < nums.length; i++){
    let localSum = 0;
    for(let j=i; j < nums.length; j++) {
      localSum += nums[j];

      //you can add k then % k again to account for negatives that way insead
      //ie: (localSum % k + k) % k == 0?
      if(localSum%k==0 || localSum%k==-0) counter++;
    }
  }
  return counter;
};

var subarraysDivByK2 = function(nums, k) {
  let pref = 0; 
  let counter = 0;
  let map = {};
  //any outcome that doesnt %= 0 won't add to counter
  for (let i = 0; i<k; i++) {
    map[i] = 0;
  }
  
  map[0] = 1;

  for( let j=0; j<nums.length; j++) {
    pref = (pref + nums[j] % k + k ) % k;
    counter += map[pref];
    map[pref]++;
  }

  return counter;
};