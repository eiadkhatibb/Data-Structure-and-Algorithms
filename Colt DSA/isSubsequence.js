function isSubsequence(str1, str2) {
  var i = 0;
  var j = 1;

  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return true;
}

console.log(isSubsequence("sing", "string"));

// Inside the loop:

// Check if the character at index j in str2 is equal to the character at index i in str1. If they match, increment i. This step is checking if the current character in str2 matches the current character in str1.
// Check if i has reached the length of str1. If it has, this means that all characters in str1 have been found in the correct order in str2, so the function returns true.
// Increment j to move to the next character in str2.
// If the loop completes without returning true, it means that not all characters in str1 were found in the correct order in str2. In this case, the function returns false.
