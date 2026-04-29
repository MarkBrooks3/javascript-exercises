const findTheOldest = function (arr) {
  let currentYear = new Date().getFullYear();
  return arr.reduce((oldest, person) => {
    let oldDeath = oldest.yearOfDeath ? oldest.yearOfDeath : currentYear;
    let youngDeath = person.yearOfDeath ? person.yearOfDeath : currentYear;
    let old = oldDeath - oldest.yearOfBirth;
    let young = youngDeath - person.yearOfBirth;
    return old > young ? oldest : person;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
