function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

var arr = [1, 2, 3, 56, 321, 44];
var val = 3;
console.log(linearSearch(arr, val));
