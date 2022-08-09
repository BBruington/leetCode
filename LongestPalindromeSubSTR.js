const longestPalindrome = function(s) {
  const stringLength = s.length;

  if( s === "" || stringLength == 0 ){
      return s;
  }

  let maxLength = 1;
  let low, high;
  let start = 0;

  for(i = 1; i < stringLength; i++){
      // check for even length palindrome substring
      low = i - 1;
      high = i;

      while(low >= 0 && high < stringLength && s[low] === s[high]){
          if( high - low + 1 > maxLength ){
              start = low;
              maxLength = high - low + 1;
          }
          low--;
          high++;
      }

      // check for odd length palindrome substring
      low = i - 1;
      high = i + 1;

      while(low >= 0 && high < stringLength && s[low] === s[high]){
          if( high - low + 1 > maxLength ){
              start = low;
              maxLength = high - low + 1;
          }
          low--;
          high++;
      }
  }
   return s.substring(start, start + maxLength);
};