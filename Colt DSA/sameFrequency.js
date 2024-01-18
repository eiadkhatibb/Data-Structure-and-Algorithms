function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) {
    return false;
  }
  var frequencyCounter1 = {};
  var frequencyCounter2 = {};

  for (let i of num1.toString()) {
    frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1; //here we are looping inside the  number if the number doesnt exist we add one (0 provides a default value of 0)
  }

  for (let i of num2.toString()) {
    frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    // same as (let key = 0; key < frequencyCounter1.length; key++)
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

const result = sameFrequency(182, 281);
console.log(result);
