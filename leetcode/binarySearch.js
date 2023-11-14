//always try to go to the halfway point of possible solutions

//aka ex: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] target = 7
// index === 0  nums[index] = 1  1 !== 7 and is < 7 nums.length === 10

//(remember to round down aka Math.floor if decimal)
//10 - 0 = 10  10 / 2 = 5 = 5

//move index right 5 because nums[index] < 7
//and nums is assumed to be sorted in ascending order

//index === 5 nums[index] = 6  6 !== 7 and is < 7
//10 - 5 = 5  5 / 2 =2.5 = 2
//move index right 2

//index === 7 nums[index] === 8  8!== 7 and is > 7
//now that nums[index] > target
//instead of nums.length - index
//we do index - previous index / 2
//then we move left instead of right
// 7 - 5 = 2  2 / 2 = 1 we go left 1

//index === 6 nums[index] === 7  7 === 7
//therefore we return the index: 7

//note that if whenever we decide to move the index
//if index before being rounded down = 0.5
//we must instead move the correct direction
//1 istead of rounding down

//if it equals 0 we return -1 because the solution
//does not exist in nums at that point

const search = function (nums, target) {
  let previousIndex = 0;
  let index = 0;
  while (index >= 0 && index < nums.length) {
    let curNumber = nums[index];
    if (curNumber === target) {
      return index;
    } else if (curNumber < target) {
      let movement = nums.length - index;
      previousIndex = index;
      movement /= 2;
      if (movement === 0.5) index++;
      if (movement === 0) return -1;
      movement = Math.floor(movement);
      index = index + movement;
    } else if (curNumber > target) {
      let movement = index - previousIndex;
      previousIndex = index;
      movement /= 2;
      if (movement === 0.5) index--;
      if (movement === 0) return -1;
      movement = Math.floor(movement);
      index = index - movement;
    }
  }
};

//cleaner ver

const search2 = function(nums, target) {
  let lo = 0, hi = nums.length-1;
  while (lo < hi) {
      let mid = lo + Math.floor((hi-lo+1)/2);
      if (target < nums[mid]) {
          hi = mid - 1
      } else {
          lo = mid; 
      }
  }
  return nums[lo]==target?lo:-1;
};
