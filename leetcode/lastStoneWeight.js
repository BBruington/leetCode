const lastStoneWeight = function(stones) {
  while(stones.length > 1) {
      stones.sort((a,b) => b-a);
      let reducedRock = stones[0] - stones[1];
      if(reducedRock !== 0) stones.push(reducedRock)
      stones.splice(0,2)
  }
  if(stones.length === 0) return 0;
  return stones[0]
};