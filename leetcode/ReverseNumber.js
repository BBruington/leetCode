const reverse = function(x) {
  let revNum = 0, lastDigit = 0;
  while (x!==0) {

      //find the num at the 1's place of current x
      lastDigit = x % 10; 
      
      //remove the num at the 1's place of current x now that it's tracked with lastDigit
      x = parseInt(x/10); 

      //add the lastDigit to the end of the solution
      revNum = revNum * 10 + lastDigit;
      if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
  }
  return revNum
};