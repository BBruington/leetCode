const removeOuterParentheses = function (s) {
  let solution = "";
  let parentheses = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      parentheses--;
      if (parentheses !== 0) {
        solution += s[i];
      }
    } else if (s[i] === "(") {
      if (parentheses !== 0) {
        solution += s[i];
      }
      parentheses++;
    }
  }
  return solution;
};
