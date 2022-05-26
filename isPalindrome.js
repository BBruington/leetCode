var isPalindrome = function(x) {
    if (x < 0) {
       return false;
     }
   //this checks to see if the number is a negative number which cannot be a Palindrome and 
   // therefor must return false
     if (x < 10) {
       return true;
     }
   //now that we dont need to worry about < 0, any whole number < 10 is automatically a
   // Palindrome
     const str = String(x);
   //we can't check the index of an integer so it needs to be converted into a string
     let i = 0, j = str.length - 1;
   //these two variables are to make it easy to compare the 1st index to the last, then
   //move inward comparing indicies
     while (i < j) {
         //once the index i and j either meet or pass each other, we need the while loop
         // to end
       if (str[i] !== str[j]) {
         return false;
       //we have the starting numbers for the first and last index already, so now
       // we need to start comparing them and if they ever arent equal, wee need
       // to return false
       }
   
       i++;
       j--;
       // we then move the indicies inward until the meet or pass each other
     }
       
     return true;
       //at this point, if the while loop never returns false and ends, we can
       // assume the integer is a Palindrome and return true
   };