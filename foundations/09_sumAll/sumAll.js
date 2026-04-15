const sumAll = function (x, y) {
  if (x < 0 || y < 0) return 'ERROR';
  if (!Number.isInteger(x) || !Number.isInteger(y)) return 'ERROR';
  let smaller = x < y ? x : y;
  let larger = x > y ? x : y;
  let ans = 0;
  for (let i = smaller; i <= larger; i++) {
    ans += i;
  }
  return ans;
};

// Do not edit below this line
module.exports = sumAll;
