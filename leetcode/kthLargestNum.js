//Find the kth largest element in an unsorted array.
//Note that it is the kth largest element in the sorted order, not the kth distinct element.

// ex:
//Input: [3, 2, 1, 5, 6, 4] and k = 2
//Output: 5

//sort through array
function kLargestNum(arr, k) {
  sortedArr = arr.sort((a,b) => a - b)
  return sortedArr[sortedArr.length - k]
}

//binary search
function kthLargestNum(arr, k) {
  let low = Number.POSITIVE_INFINITY;
  let high = Number.NEGATIVE_INFINITY;

  // Find the minimum and maximum elements in the array
  for (let i = 0; i < arr.length; i++) {
    low = Math.min(low, arr[i]);
    high = Math.max(high, arr[i]);
  }

  // Perform binary search on the range of elements between low and high
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2); //4 5 4
    let count = 0;

    // Count the number of elements greater than mid in the array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) {
        count++; //2
      }
    }

    // If there are at least K elements greater than mid, search the right half
    if (count >= k) {
      low = mid + 1;
    }
    // Otherwise, search the left half
    else {
      high = mid - 1;
    }
  }

  // Return the Kth largest element
  return high;
}

function printKLargest(arr, k) {
  // Find the Kth largest element
  const kthLargest = kthLargestNum(arr, k);

  // Print the K largest elements in decreasing order
  process.stdout.write("K largest elements: ");
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= kthLargest) {
          process.stdout.write(arr[i] + " ");
      }
  }
  console.log()
}
