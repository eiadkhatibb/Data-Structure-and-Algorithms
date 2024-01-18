function maxSubarraySum(arr, num) {
  var maxsum = 0;
  var tempsum = 0;
  if (arr.length < num) return null;
  for (var i = 0; i < num; i++) {
    maxsum += arr[i];
  }
  tempsum = maxsum;
  for (let i = num; i < arr.length; i++) {
    tempsum = tempsum - arr[i - num] + arr[i];
    maxsum = Math.max(maxsum, tempsum);
  }
  return maxsum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
