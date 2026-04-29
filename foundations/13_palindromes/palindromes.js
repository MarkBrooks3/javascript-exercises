const palindromes = function (str) {
  let comp = str.replace(/\W/g, '').toUpperCase();
  let start = 0;
  let end = comp.length - 1;
  console.log(comp);
  while (start <= end) {
    if (comp[start] != comp[end]) return false;
    start++;
    end--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
