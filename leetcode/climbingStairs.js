const climbStairs = function(n) {
  if (n == 1 || n == 0) return 1 // our base cases

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
      let third = first + second;
      first = second;
      second = third;
  }
  return second;

};

// Ex: n = 10

// i = 3
// third = 3
// first = 2
// second = 3

// i = 4
// third = 5
// first = 3
// second = 5

// i = 5
// third = 8
// first = 5
// second = 8

// i = 6
// third = 13
// first = 8
// second = 13

// i = 7
// third = 21
// first = 13
// second = 21

// i = 8
// third = 34
// first = 21
// second = 34

// i = 9
// third = 55
// first = 34
// second = 55

// i = 10
// third = 89
// first = 55
// second = 89


// return second = 89


