const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((sum, curr) => (sum !== 0 ? sum * curr : curr), 0);
};

const power = function (base, power) {
  if (power == 0) return 1;
  let total = base;
  for (let i = 1; i < power; i++) {
    total *= base;
  }
  return total;
};

const factorial = function (num) {
  if (num == 0) return 1;
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
