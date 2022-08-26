const searchRange = function(nums, target) {
  // initialize the variable to find first / last index of target
  let i = 0, j = nums.length - 1, mid;
 let leftIndex = -1, rightIndex = -1;


 while(i <= j){
  //find middle point of sorted arr and Math.floor it
     mid = ~~(i + (j - i) / 2);


      // since arr is assumed to be sorted, see if mid is > 
      // then move into the direction of possible solution
     if(nums[mid] > target){
         j = mid - 1;
     } else if (nums[mid] < target){
         i = mid + 1;

         //if you find the first instance of possible solution,
         //set it to left index and keep decreasing mid by 1 
         //until you've discovered the leftmost instance of
         //target and set it to leftindex
     } else {
         leftIndex = mid;
         j = mid - 1;
     }
 }

 i = 0;
 j = nums.length - 1;

 while(i <= j){
     mid = ~~(i + (j - i) / 2);

     if(nums[mid] > target){
         j = mid - 1;
     } else if (nums[mid] < target){
         i = mid + 1;

        //do the same as the upper while loop except find the 
        //rightmost instance of target and set it to rightindex
     } else {
         rightIndex = mid;
         i = mid + 1;
     }
 }


 //if there was never an instance of finding a target,
 //leftindex and rightindex will have remained -1 and
 //will therefore return [-1, -1]
 return [leftIndex, rightIndex];
};