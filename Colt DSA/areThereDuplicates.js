function areThereDuplicates() {
  let collection = {};
  let argsArray = [...arguments];
  for (let i of argsArray) {
    collection[i] = (collection[i] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
