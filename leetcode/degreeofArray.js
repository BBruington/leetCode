const findShortestSubArray = function (nums) {
  let left = {},
    right = {},
    timesInArray = {};

  for (let i = 0; i < nums.length; i++) {
    if (left[nums[i]] === undefined) left[nums[i]] = i;
    if (right[nums[i]] < i || right[nums[i]] === undefined) right[nums[i]] = i;
    if (timesInArray[nums[i]] === undefined) {
      timesInArray[nums[i]] = 1;
    } else {
      timesInArray[nums[i]] = timesInArray[nums[i]] + 1;
    }
  }
  let mostTimesInArray = 0;
  let length = 0;
  for (let amount in timesInArray) {
    if (timesInArray[amount] >= mostTimesInArray) {
      if (timesInArray[amount] > mostTimesInArray) {
        length = right[amount] - left[amount] + 1;
      } else {
        length = Math.min(length, right[amount] - left[amount] + 1);
      }
      mostTimesInArray = timesInArray[counts];
    }
  }
  return length;
};
