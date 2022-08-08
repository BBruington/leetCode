var lengthOfLongestSubstring = function(s) {
  // Initialise a set to store the longest string in
 let longestStringLength = 0;

 // Loop through the provided string
 for (let i = 0; i < s.length; i++) {
     // Initialise a set to store the string created from the current point
     let currentStringSet = new Set();

     // Loop through the letters from the current point
     for (let x = i; x < s.length; x++) {
         // Check if the current letter exists in the current Set
         if (currentStringSet.has(s[x])) {
             // Move on from the current letter without adding it (as it already exists in the set)
             break;
         } else {
             // Character not found, add it to the set
             currentStringSet.add(s[x]);
         }
     }

     // Update the longest string length (if this one was bigger)
     longestStringLength = Math.max(
         longestStringLength,
         currentStringSet.size
     );
 }

 return longestStringLength;
};