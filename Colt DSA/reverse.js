// function reverse(string) {
//   let result = [];
//   function helper(index) {
//     if (index < 0) return;
//     result.push(string[index]);
//     helper(index - 1);
//   }
//   helper(string.length - 1);
//   return result.join("");
// }

function reversestr(string) {
  if (string === "") {
    return string;
  } else {
    return reversestr(string.substr(1)) + string[0];
  }
}

console.log(reversestr("help"));

// console.log(reverse("help"));
