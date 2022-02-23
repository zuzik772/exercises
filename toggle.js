"use-strict";
// how does toggle work
let isTrue = false;

if (isTrue === true) {
  isTrue = false;
} else {
  isTrue = true;
}

// same as

isTrue = !isTrue;

console.log(haveIDrowned(200, true, true));
function haveIDrowned(seeLevel, wetSuit, positionIsUp) {
  let returnFlag = false;
  if (seeLevel >= 200) {
    if (!wetSuit) {
      returnFlag = true;
    }
  } else if (seeLevel < 100) {
    if (!positionIsUp) {
      returnFlag = true;
    }
  }
  return returnFlag;
}

// remainder to check divisible

// is leap year
function isLeapYear(year) {
  let leapFlag = false;

  if (year % 100 === 0) {
    if (year % 400 === 0) {
      leapFlag = true;
    }
  } else if (year % 4 === 0) {
    leapFlag = true;
  }
  return leapFlag;
}
