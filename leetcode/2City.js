//A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, 
//and the cost of flying the ith person to city b is bCosti.

//Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.



var twoCitySchedCost = function(costs) {
  // Calculate the amount of people we need per city
  let n = costs.length/2;
  // Pointers and total cost
  let a = 0, b = 0, total = 0;
  // Sort costs by greatest difference
  costs.sort((a,b) => Math.abs(b[0]-b[1])-Math.abs(a[0]-a[1]));
  // Add costs of flights to the total
  for (let cost of costs) {
      if (cost[0] <= cost[1] && a < n) {
          total += cost[0];
          a++;
      } else if (cost[0] >= cost[1] && b < n) {
          total += cost[1];
          b++;
      } else total += a < n ? cost[0] : cost[1];
  }
  return total; 
};