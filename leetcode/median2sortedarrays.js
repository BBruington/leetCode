const findMedianSortedArrays = function(nums1, nums2) {
  // merge the 2 arrays and assign it the joined variable
  const joined = nums1.concat(nums2);
  //use the sort method to modify joined to ascending order
 joined.sort(function (a, b) {
  //1. < 0 ... a comes first
  //2. 0 ... nothing will change
  //3. > 0 ... b comes first
     return a - b
 });

 //check whether the sorted array is either even or odd
 //you know it's odd if the length of the array doesn't return
 //0 when you % 2
 const even = joined.length / 2, 
     isOdd = joined.length % 2;

 if (isOdd > 0) {
    //if it's odd, return the middlemost index of the 
    //sorted array.
     return joined[Math.floor(joined.length / 2)];
 } else {
    //if it's even, add the 2 indexes that are in the middle
    //and divide them by 2
     return (joined[even] + joined[even - 1]) / 2;
 };
};