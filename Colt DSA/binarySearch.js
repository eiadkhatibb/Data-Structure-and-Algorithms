function binarySearch(arr, num) {
  var left = 0;
  var right = arr.length - 1;
  for (var i = 0; i < arr.length; i++) {
    var middle = Math.floor((left + right) / 2);
    console.log("midddle", middle, "left", left, "right", right);
    if (arr[middle] === num) {
      return middle;
    } else if (arr[middle] > num) {
      right = middle - 1;
    } else {
      //if (arr[middle] < num)
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 54, 67, 2323, 5354], 67));
