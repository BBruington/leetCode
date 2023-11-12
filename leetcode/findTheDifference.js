const findTheDifference = function (s, t) {
  let numForChar = 0;
  for (let i = 0; i < s.length; i++) {
    numForChar ^= s.charCodeAt(i);
  }
  for (let i = 0; i < t.length; i++) {
    numForChar ^= t.charCodeAt(i);
  }
  return String.fromCharCode(numForChar);
};
