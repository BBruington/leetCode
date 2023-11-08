const findDuplicateButBetter = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) return nums[i];
    else hash[nums[i]] = 0;
  }
  return "no duplicates"
};

const duplicateNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const result = nums.filter((num) => {
      return num === nums[i];
    });
    if (result.length >= 2) return result[0];
  }
};
