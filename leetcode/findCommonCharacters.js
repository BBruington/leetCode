
const commonChars = function(words) {

  let result = []
  //compare each letter in the word at index 0 to each other word
  for(let i = 0 ; i < words[0].length ; i++)
      for(let j = 1 ; j < words.length ; j++){
          //check if each individual word doesnt contain the current letter you're checking from index 0
          //ifso stop the loop
          if(!words[j].includes(words[0][i])) break;
          else  
          //if it does contain the letter, replace the first instance of the matching letter with an empty string incase you need to check
          //for duplicates of the letter
              words[j] = words[j].replace(words[0][i],'')
          //if every word constains the letter, add it to the solution
          if(j == words.length - 1) result.push(words[0][i]);
      }
  return result;
  
};