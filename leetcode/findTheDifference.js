const findTheDifference = function (s, t) {
  let numForChar = 0;
  for (let i = 0; i < s.length; i++) {
    numForChar ^= s.charCodeAt(i);
  }
  for (let i = 0; i < t.length; i++) {
    numForChar ^= t.charCodeAt(i);
  }
  //the logic is that x ^= x === 0 so if you ^= 2 strings that are exactly the same except for 1 letter, you will be left with
  //the unicode for the letter that was added then you convert it back into a string

  //ex:
  //s= "ab" t="abc"
  // "a".charCodeAt(0) ^ "a".charCodeAt(0) ^ "b".charCodeAt(0) ^ "b".charCodeAt(0) ^ "c".charCodeAt(0)
  // "a".charCodeAt(0) ^ "a".charCodeAt(0) = 0
  //"b".charCodeAt(0) ^ "b".charCodeAt(0) = 0
  //0 ^ 0 ^ "c".charCodeAt(0) = "c".charCodeAt(0)
  // fromCharCode("c".charCodeAt(0)) = "c"
  return String.fromCharCode(numForChar);
};
