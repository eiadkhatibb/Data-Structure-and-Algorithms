function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  var i = 0;
  var j = 1;

  for (var k = 0; k < arr.length; k++)
    if (arr[i] === arr[j]) {
      j++;
    } else if (arr[i] !== arr[j]) {
      arr[j] = arr[k]; //we are setting the value of j to the value of current K

      i++;
    }
  return i + 1;
}

console.log(countUniqueValues([]));

//colts solution
function coltcountUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
coltcountUniqueValues([1, 2, 2, 5, 7, 7, 99]);
