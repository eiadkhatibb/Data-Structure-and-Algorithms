function addupto(n) {
  var total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// const result = addupto(6);
// console.log(result);

var t1 = performance.now();
addupto(1000000000);
var t2 = performance.now();
console.log(`time: ${(t2 - t1) / 1000} seconds`);
