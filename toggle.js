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
