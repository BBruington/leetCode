// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

const merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])

  let solution = []
  let curVal = intervals[0]
  for(let i =1; i < intervals.length; i++) {
    if (curVal[1] >= intervals[i][0]) {
      curVal = [curVal[0], Math.max(curVal[1], intervals[i][1])];
    } else {
      solution.push(curVal);
      curVal = intervals[i];
    }
  }
  solution.push(curVal);
  return solution;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))