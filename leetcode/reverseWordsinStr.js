const reverseWords = function(s) {
  const splitString = s.split(' ');
  const solution = splitString.map((string) => string.split('').reverse().join(''))
  return solution.join(' ')
};