// linear search

const twoSum = function(nums, target) {
  for( i=0; i < nums.length - 1; i++) {
    for( j=i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

//hashmap

const twosum = function(nums, target) {

  //initialize a variable to hold possible solutions
  let hash = {};

  //iterate through the array to find possible solutions and compare them to i
  for(let i = 0; i < nums.length; i++) {
    const n = nums[i];
    //we subtract n from target to figure out what the possible solution is
    //if it's already stored in our hash we return the answer
    if(hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }

    //otherwise we store the possible solution in our hash variable
    hash[n] = i;
  }
  return [];
}

//terrible solution i did for fun

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const twosumRandom = function(nums, target) {
  let solvable = false

  //initialize a variable to hold possible solutions
  let hash = {};

  //iterate through the array to find possible solutions and compare them to i
  for(let i = 0; i < nums.length; i++) {
    const n = nums[i];
    //we subtract n from target to figure out what the possible solution is
    //if it's already stored in our hash we return the answer
    if(hash[target - n] !== undefined) {
      solvable = true
    }
    while(solvable) {
      let nums1 = randomIntFromInterval(0, nums.length-1)
      let nums2 = randomIntFromInterval(0, nums.length-1)
      while (num1 === nums2) nums2 = randomIntFromInterval(0, nums.length-1);
      if(nums[nums1] + nums[nums2] === target) {
        if(nums1 < nums2) {
          return [nums1, nums2]
        } else {
          return [nums2, nums1]
        }
      }
    }

    //otherwise we store the possible solution in our hash variable
    hash[n] = i;
  }
  return [];
}