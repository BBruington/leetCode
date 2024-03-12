// Given an array of positive integers arr[] and an integer x,
// The task is to find all unique combinations in arr[] where the sum is equal to x.
// The same repeated number may be chosen from arr[] an unlimited number of times.
// Elements in a combination (a1, a2, …, ak) must be printed in non-descending order. (ie, a1 <= a2 <= … <= ak).
// If there is no combination possible print “Empty”.

//ex

// Input: arr[] = 2, 4, 6, 8, x = 8
// Output:
// [2, 2, 2, 2]
// [2, 2, 4]
// [2, 6]
// [4, 4]
// [8]

function combinationSum(arr, sum) {
  let ans = new Array();
  let temp = new Array();

  // first do hashing since hashset does not always
  // sort
  //  removing the duplicates using HashSet and
  // Sorting the arrayList

  let set = new Set([...arr]);
  arr = [...set];
  arr.sort();

  findNumbers(ans, arr, sum, 0, temp);
  return ans;
}

function findNumbers(ans, arr, sum, index, temp) {
  if (sum == 0) {
    // pushing deep copy of list to ans

    ans.push([...temp]);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    // checking that sum does not become negative

    if (sum - arr[i] >= 0) {
      // pushing element which can contribute to
      // sum

      temp.push(arr[i]);

      findNumbers(ans, arr, sum - arr[i], i, temp);

      // removing element from list (backtracking)
      temp.splice(temp.indexOf(arr[i]), 1);
    }
  }
}

// Driver Code

let arr = [];

arr.push(2);
arr.push(4);
arr.push(6);
arr.push(8);

let sum = 8;

let ans = combinationSum(arr, sum);

// If result is empty, then
if (ans.length == 0) {
  document.write("Empty");
}

// print all combinations stored in ans
for (let i = 0; i < ans.length; i++) {
  document.write("(");
  for (let j = 0; j < ans[i].length; j++) {
    document.write(" ", ans[i][j] + " ");
  }
  document.write(") ");
}
