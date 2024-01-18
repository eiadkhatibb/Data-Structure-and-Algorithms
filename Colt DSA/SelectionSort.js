function SelectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var smallest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
}

console.log(SelectionSort([8, 1, 2, 3, 4, 5, 6, 7]));
