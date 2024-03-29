const maxArea = function(height) {
  //set up parameters for searching the maxarea
  let answer = 0, i = 0, j = height.length-1
  //we iterate through checking every possible combination until index i and j pass or meet
 while (i < j) {

    //check which is lower, height[i] or height[j] then multiply it by the difference of j and i (hence finding its area)
    //afterwards, check witch is higher, the current defined answer or the new area just calulated and set it
    //to the new anser if it's higher
     answer = Math.max(answer, Math.min(height[i], height[j]) * (j - i))
     //iterate every possible cup container to find which height is the solution (highest)
     //moving ONLY the index that is lower than the other, if both are the same height, just move index i
     height[i] <= height[j] ? i++ : j--
 }
 //after going through every possible container and finding the greatest area, return that as the answer
 return answer
};

const maxArea2 = function(height) {
  let maxHeight = 0, i = 0, j = height.length - 1
  while (i < j) {
      let currentHeight = Math.min(height[i], height[j])
      maxHeight = Math.max(maxHeight, currentHeight * (j - i))
      height[i] < height[j] ? i++ : j--
  }
  return maxHeight;
};