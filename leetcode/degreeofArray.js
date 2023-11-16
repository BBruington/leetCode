const findShortestSubArray = function(nums) {
  let Lindex = {}, Rindex = {}, counter = {}

  for( let i = 0; i < nums.length; i++){
  if(Lindex[nums[i]] === undefined) Lindex[nums[i]] = i;
  if(Rindex[nums[i]] < i ||  Rindex[nums[i]] === undefined) Rindex[nums[i]] = i
  if (counter[nums[i]] === undefined) {
      counter[nums[i]] = 1
  } else {
      counter[nums[i]] = counter[nums[i]] + 1;
  }}
  let biggest = 0;
  let biggestVal = 0;
  let length = 0;
  for(let counts in counter) {
      if(counter[counts] >= biggestVal) {
          biggest = counts;
          if(counter[counts] > biggestVal) {
              length = Rindex[biggest] - Lindex[biggest] + 1;
          } else{
              if(length !== 0) {
                  length = Math.min(length, Rindex[biggest] - Lindex[biggest] + 1)
              } else {length = Rindex[biggest] - Lindex[biggest] + 1;}

          }
          biggestVal = counter[counts]
      }
  }
  return length;
};