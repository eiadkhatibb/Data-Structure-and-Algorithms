function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var frequencyCounter1 = {};
  var frequencyCounter2 = {};
  for (let i of str1) {
    frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
  }

  for (let i of str2) {
    frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}
console.log(validAnagram("anagram", "nagaram"));
