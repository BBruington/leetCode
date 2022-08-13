const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};
//this is the base value of every roman numeral alone
var romanToInt = function(s) {
    let accumulator = 0;
  for (let i = 0; i < s.length; i++) {
      //we loop over the entire roman numeral to find its value

      //also note that the loop i++ AND the if / else if statements i++. This is to make sure that a roman numeral
      //isn't calculated twise which is ALSO why the else at the end doesn't i++
      if (s[i] === "I" && s[i + 1] === "V") {
        accumulator += 4;
        i++;
        //we us an if statement to both check the current roman numeral being values, and compare
        //it to the nex one to properly value it. With the above example it compares I to V and
        //makes the outcome 4. I then brute force every instance that this cam happen
      } else if (s[i] === "I" && s[i + 1] === "X") {
        accumulator += 9;
        i++;
      } else if (s[i] === "X" && s[i + 1] === "L") {
        accumulator += 40;
        i++;
      } else if (s[i] === "X" && s[i + 1] === "C") {
        accumulator += 90;
        i++;
      } else if (s[i] === "C" && s[i + 1] === "D") {
        accumulator += 400;
        i++;
      } else if (s[i] === "C" && s[i + 1] === "M") {
        accumulator += 900;
        i++;
      } else {
        accumulator += romanHash[s[i]];
        //I always += to add onto the current value of accumulator until i've looped through the entire thing.
      }
    }
    return accumulator;
    //once i finish looping, i can return the total value of accumulator
};