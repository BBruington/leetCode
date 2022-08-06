const threeSum = function(nums) {
  nums.sort((a,b) => a - b);
  //initialize the variable that'll hold all possible solutions in nums
  const triplets = [];

  // iterate through the array of nums looking for possible solutions
  for(let i=0; i < nums.length - 2; i++){
   if(nums[i] != nums[i-1]){ // making sure our solution set does not contain duplicate triplets
       let left = i + 1;
     let right = nums.length - 1;

        // keep checking possible sum combinations with the same i until variables left and right pass each other
       while (left < right){
            // create a variable that'll be used to check for a solution of 0
           const currentSum = nums[i] + nums[left] + nums[right];

           if (currentSum === 0){
             // if it is a solution, add it the the other solutions of triplets
               triplets.push([nums[i], nums[left], nums[right]]);
               while(nums[left] == nums[left + 1]) left ++
               while(nums[right] == nums[right - 1]) right -- // making sure our solution set does not contain duplicate triplets

               // we keep checking every possible combination of the 3 sums
               left ++;
               right --;
           } else if(currentSum < 0) {
               left ++
           } else if(currentSum > 0){
               right --
           }
       }
   }
  }

  //once we check every possible 3 sum, we return the variable contained every possible solution we pushed onto triplets
  return triplets
};