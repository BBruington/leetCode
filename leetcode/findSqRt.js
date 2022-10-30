
//the function starts at 0, then checks every whole integer squared going up by one until the given integer, x is 
//less than a power then return the power right before being greater than x
var mySqrt = function(x) {
    let pwr = 0
    while( pwr*pwr <= x) pwr++
    return pwr - 1
  };