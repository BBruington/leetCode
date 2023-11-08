const removeElement = function(nums, val) {
  let k = 0;
  let solution = []
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== val) {
          k++
          solution.push(nums[i])
      } 
  }
  for(let i = 0; i < solution.length; i++) {
      nums[i] = solution[i]
  }
  return k;
};

const removeElement2 = function(nums, val) {
  let k = 0;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === val) {
          k++
          nums.splice(i, 1)
          i--
      } 
  }
  return k;
}