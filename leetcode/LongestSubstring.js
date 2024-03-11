// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = function (s) {
  // Initialise a set to store the longest string in
  let longestStringLength = 0;

  // Loop through the provided string
  for (let i = 0; i < s.length; i++) {
    // Initialise a set to store the string created from the current point
    let currentStringSet = new Set();

    // Loop through the letters from the current point
    for (let x = i; x < s.length; x++) {
      // Check if the current letter exists in the current Set
      if (currentStringSet.has(s[x])) {
        // Move on from the current letter without adding it (as it already exists in the set)
        break;
      } else {
        // Character not found, add it to the set
        currentStringSet.add(s[x]);
      }
    }

    // Update the longest string length (if this one was bigger)
    longestStringLength = Math.max(longestStringLength, currentStringSet.size);
  }

  return longestStringLength;
};

// ver 2

const longestSubStr = (str) => {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  if (str.length < 2) return str.length;
  for (let i = 0; i < str.length; i++) {
    while (set.has(str[i])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[i]);
    maxLength = Math.max(maxLength, i - left + 1);
  }
  return maxLength;
};
