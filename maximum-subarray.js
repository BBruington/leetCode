function maxSubArray(nums) {
    let globalMaxSum = -Infinity;
  
    //  the reason we are looping through the entire nums.length is because a sub array can be the entire length
    for (let i = 0; i < nums.length; i++) {
      let localMaxSum = 0;
      // the reason j is to i is because we are scanning all the combinations of the nums[i]
      // on every iteration of nums[i], localMaxSum will reset and the second for loop (j) will accumulate all the combinations 
      for (let j = i; j < nums.length; j++) {
          localMaxSum +=  nums[j];
            // the localMaxSum will keep getting bigger in every instance of a subarray and compare every single iteration to our
            //return solution to brute force and find the largest maxsum subarray within the nums array
          if (localMaxSum > globalMaxSum) {
              globalMaxSum = localMaxSum;
              //for every instance of the loop we check if we find a new greatest maxsum subarray and if we do, we set the new greatest sum
              //to our return solution
          }
      }
    }
  
    return globalMaxSum;
  }

  // optimized version

//   function maxSubArray(nums) {

// let globalMaxSum = nums[0];
//   let localMaxSum = nums[0];
	
//   // We start the for loop at index 1 because localMaxSum + globalMaxSum has already been solved!
//   // Now we can actually take the previous solution and apply it to index 1.
//   for (let i = 1; i < nums.length; i++) {
// 		// We keep track of the previous solution (localMaxSum[i - 1]) and we memoization it by storing it in localMaxSum
// 		// As we iterate the array, do we keep nums[i] or do we keep accumlating our memoized solution?
// 		localMaxSum = Math.max(nums[i], localMaxSum + nums[i]);
// 		// Greedy algorithm, compare local solution to the global solution
// 		globalMaxSum = Math.max(localMaxSum, globalMaxSum);
//   }

//   return globalMaxSum;
// }