const nextPermutation = function(nums) {
  let solution = nums; 
  for(let i = nums.length - 1; i > 0; i--) {
    for(let j = i-1;j >=0; j-- ) {
      if(nums[i] > nums[j]) {
        const temp = solution[i]
        solution[i] = solution[j]
        solution[j] = temp;
        const subArray = solution.slice(j + 1, solution.length)
        if(subArray.length > 1) {
          subArray.reverse();
          for(let start = j+1, end=0; start < solution.length; start++, end++){
            solution[start] = subArray[end]
          }
        }
        return solution;
      }
    }
  }
  return nums.sort((a,b) => a - b) 
};

//1. start at the end of the array
//2. check to see if right index is greater than any of the left indexes
//3. if you find a left index less than the right index, swap them
//4. flip all indexes to the right of the new position of right index 
//5. if you don't find an index less than right index then repeat steps 2-4 but now checking the next index from the right

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]

// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]

// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]

//Example 4:

//Input: nums = [1, 2, 4, 5, 3]
//Output: [1, 3, 2, 5, 4] ... [1, 3, 4, 2, 5] ... [1, 3, 4, 5, 2] ... [2, 1, 5, 4, 3]