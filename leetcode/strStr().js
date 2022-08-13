// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;

  if (needle === haystack) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
      //i keep looping over until i find a segment equal to needle. Since it's impossible to have a segment of
      //haystack equal to needle if the remainder of the haystack.length is less than needle, i can add that
      //restriction to the for loop 
       
    if (needle === haystack.substring(i, i + needle.length)) {
        //i can easily check if a part of haystack is equal using the substring method.
        //string theory pulls a segment of haystack by putting in index and the point i want to cut off. For this instance
        // the index i would want to start is i, and i want to continue forwar for as long as the length of needle.
      return i;
    }
  }

  return -1;
};