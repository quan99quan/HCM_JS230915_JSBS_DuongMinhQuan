let a = prompt("nhập số a");
let b = prompt("nhập số b");
let c = prompt("nhập số c");
let d = prompt("nhập số d");
let e = prompt("nhập số e");
let input = [a, b, c, d, e];
for (let i = 0; i < input.length; i++) {
  if (!isNaN(input[i])) {
    input.splice(i, 1);
    i--;
  }
}
alert(input);
