let a = parseInt(prompt("nhập số a"));
let b = parseInt(prompt("nhập số b"));
let c = parseInt(prompt("nhập số c"));
let d = parseInt(prompt("nhập số d"));
let e = parseInt(prompt("nhập số e"));
let input = [a, b, c, d, e];
let maxUnique = null;
for (let i = 0; i < input.length; i++) {
  if (input.lastIndexOf(input[i]) === input.indexOf(input[i])) {
    if (maxUnique === null || input[i] > maxUnique) {
      maxUnique = input[i];
    }
  }
}
alert(maxUnique);