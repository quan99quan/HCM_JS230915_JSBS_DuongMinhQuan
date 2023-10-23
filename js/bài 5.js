let input = prompt("Nhập vào một chuỗi");
let words = input.split(" ");
let detail = words.map((item) => {
  return item.split("").reverse().join("");
});
let result = detail.join(" ");
alert(result);
