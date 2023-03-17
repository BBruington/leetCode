// You are given a list of songs where the ith song has a duration of time[i] seconds.

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. 
// Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

var numPairsDivisibleBy60 = function(time) {
  let counter = 0;
  let map = {};
  
  for(let i = 0; i < time.length; i++) {
    let remainder = time[i] % 60;
    counter += map[(60 - remainder) % 60] || 0;
    map[remainder] = (map[remainder] || 0) + 1;
  }
  return counter;
};
