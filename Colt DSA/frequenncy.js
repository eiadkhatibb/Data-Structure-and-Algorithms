function frequency(str) {
  var result = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char))
      //   if (result[char] > 0) {
      //     result[char]++;
      //   } else {
      //     result[char] = 1;
      //   }
      result[char] > 0 ? result[char]++ : (result[char] = 1);
  }
  return result;
}

console.log(frequency("Hello!!"));
