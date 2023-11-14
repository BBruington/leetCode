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
      let movement = (nums.length - index) / 2;
      previousIndex = index;
      if (movement === 0.5) {
        if (nums[index + 1] === target) {
          return index + 1;
        } else return -1;
      }
      if (movement === 0) return -1;
      movement = Math.floor(movement);
      index += movement;
    } else if (curNumber > target) {
      let movement = (index - previousIndex) / 2;
      previousIndex = index;
      if (movement === 0.5) {
        if (nums[index + 1] === target) {
          return index + 1;
        } else return -1;
      }
      if (movement === 0) return -1;
      movement = Math.floor(movement);
      index -= movement;
    }
  }
};

//cleaner ver

const search2 = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = low + Math.floor((high - low + 1) / 2);
    if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }
  return nums[low] == target ? low : -1;
};
