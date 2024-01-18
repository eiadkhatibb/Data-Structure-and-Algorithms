function averagePair(arr, num) {
  if (arr.length === 0) {
    return false;
  }
  var i = 0;
  var j = arr.length - 1;
  for (var k = 0; k < arr.length; k++) {
    var avg = (arr[i] + arr[j]) / 2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
