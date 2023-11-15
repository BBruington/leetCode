const strStr = function(haystack, needle) { 
  for( let i = 0; i < haystack.length; i++) {
      if(haystack.substring(i, needle.length + i) === needle) return i;
  }
  return -1;
};