const singleNumberCar = function(nums) {
  res = 0;
  for(let num of nums){
      res^=num
  }
  return res;
};

const singleNumber = function(nums) {
  let twos = [];
  let twosTest = [];
  for(let i = 0; i < nums.length; i++) {
      if( twosTest.includes(nums[i])) {
          twos.push(nums[i])
      }
      else { twosTest.push(nums[i])}
  }
  for(let i = 0; i < nums.length; i++) {
      if( twos.includes(nums[i]) === false) {
          return nums[i]
      }
  }
  return [];
};