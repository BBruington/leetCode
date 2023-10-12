const numTilings = function(n) {
  let arr =[1,1,2]
  let MOD = Math.pow(10, 9) + 7
  // 2*arr[currenti-1]+arr[currenti-3] = a
  //x2+1 x2+2 x2+5 x2+11 x2+24
  //n=0, n=1, n=2 n=3 n=4 n=5  n=6  n=7
  //[+1   +1   +2  +5  +11 +24 +53   117 258]
  //   +1  +1   +3  +6  +13 +29   +64
  //    0    +2  +3  +7  +16  +35
  if(n < 3) return n;

  for(i=3; i<=n; i++){
    let result = 2*arr[i-1] + arr[i-3];
    arr.push(result % MOD);
  }

  return arr[arr.length - 1]
};