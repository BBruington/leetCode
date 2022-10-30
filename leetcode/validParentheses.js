
var isValid = function(s) {
    const stack = [];
    //variable stack is used to add either (, {, or [
    for ( i = 0; i < s.length; i++) {
      const top = stack[stack.length - 1];
      //variable top is used to be able to easily check the most recently added (, {, or [ using push
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i]);
      else if (s[i] === ')' && top === '(') stack.pop();
        //here it checks to see if the index of s is a ) and checks to see if a ( was added to the end of stack
        //if so, it pops (removes) the ( from stack
      else if (s[i] === ']' && top === '[') stack.pop();
      else if (s[i] === '}' && top === '{') stack.pop();
      else return false;
        // if the next index of the loop is incapable of matching a ), }, or ] with it's coorisponding (, {, or [ using the if statements, 
        // s isn't considered a valid parantheses and returns false.
    }
  if( par.length > 0) return false

  return true;
       //if all of the paranthesis added to stack were matched with there coorisponding ), }, or ] (which will pop (, {, or [ from stack), 
       //this boolian statement will return true proving that s is a valid parantheses
};

