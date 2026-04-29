const fibonacci = function (num) {
  if (num == 1) return 1;
  if (num == 2) return 1;
  if (num < 0) return 'OOPS';
  let sum = 0;
  let first = 1;
  let second = 1;

  for (let i = 3; i <= num; i++) {
    console.log(`${i}`);
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
