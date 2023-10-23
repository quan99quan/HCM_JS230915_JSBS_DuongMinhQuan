function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  let a = parseInt(prompt("nhập số a"));
  let b = parseInt(prompt("nhập số b"));
  let c = parseInt(prompt("nhập số c"));
  let d = parseInt(prompt("nhập số d"));
  let e = parseInt(prompt("nhập số e"));
  let input = [a, b, c, d, e];
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (isPrime(input[i])) {
      sum += input[i];
    }
  }
  alert(sum);