const generateParenthesis = function(n) {
  const result = [];
breathFirstSearch("", 0, 0);
return result;
function breathFirstSearch(str, left, right) {
 if (left === n && right === n) {
   result.push(str);
   return;
 }
 if (left !== n) {
   breathFirstSearch(str + "(", left + 1, right);
 }
 if (left > right) {
   breathFirstSearch(str + ")", left, right + 1);
 }
}
};

//ex: n = 2
//function breathFirstSearch(str = "", left = 0, right = 0)

// left !== n? i want you to run the function again but add "(" and left +1

// is left > right? i want you to run the function AGAIN but this instance has
// ")" and right plus 1 instead

//instance 1a breathFirstSearch("(", 1, 0)

//instance 2a breathFirstSearch("((", 2, 0)
//instance 2b breathFirstSearch("()", 1, 1)

//instance 3a breathFirstSearch("(()", 2, 1)
//instance 3b breathFirstSearch("()(", 2, 1)

//instance 4a breathFirstSearch("(())", 2, 2)
//if both left and right === n add it to solution

//instance 4b breathFirstSearch("()()", 2, 2)
//if both left and right === n add it to solution
