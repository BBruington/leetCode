const sortArrayByParity = function(nums) {
  let solution = []
  for(let num of nums) {
      if(num % 2 === 0) {
          solution.unshift(num)
      }else {
          solution.push(num)
      }
  }
  return solution;
};