const maxProfit = (prices) => {
  let min = 0; 
  let max = 1; 
  let solution = 0;
  while (max < prices.length) {
    if (prices[min] < prices[max]) {
      let profit = prices[max] - prices[min];   
      solution = Math.max(solution, profit);
    } else { min = max; }
    max++;
  }
  return solution;
};