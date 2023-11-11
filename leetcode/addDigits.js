const addDigits = function(num) {
  let sumNums = num;
  while (sumNums.toString().length > 1){
      const digits = sumNums.toString().split('');
      const realDigits = digits.map(Number);
      sumNums = realDigits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  return sumNums;
};