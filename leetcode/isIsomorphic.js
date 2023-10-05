const isIsomorphic = function(s, t) {
  let hash = {};
  let solution = '';
  for ( let i = 0; i < s.length; i++) {
      const checker = s[i];
      if(!hash[checker]) {
          if(Object.keys(hash).find(key => hash[key] === t[i])) return false
          hash[checker] = t[i]
          }
  }
  for ( let i = 0; i < s.length; i++) {
      const checker = s[i];
      solution = solution+ hash[checker];
  }
  if(solution === t) return true;
  return false;
};