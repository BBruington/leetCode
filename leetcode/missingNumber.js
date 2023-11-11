const missingNumber = function(nums) {
  for(let i = 0; i < nums.length; i++) {
      if(nums.find((number) => number === i) === undefined) return i
  }
  return nums.length;
};