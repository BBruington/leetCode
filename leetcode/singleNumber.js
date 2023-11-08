const singleNumber = function (nums) {
  let twos = [];
  let twosTest = [];
  for (let i = 0; i < nums.length; i++) {
    if (twosTest.includes(nums[i])) {
      twos.push(nums[i]);
    } else {
      twosTest.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (twos.includes(nums[i]) === false) {
      return nums[i];
    }
  }
  return [];
};

const singleNumber2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const result = nums.filter((num) => {
      return num === nums[i];
    });
    if (result.length === 1) return result[0];
  }
};

const singleNumber3 = function (nums) {
  res = 0;
  for (let num of nums) {
    res ^= num;
  }
  return res;
};
