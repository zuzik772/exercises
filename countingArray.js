"use strict";

let count = 0;
let array = [];
window.addEventListener("load", loop);
function loop() {
  count++;

  const finalArray = array.unshift(count);

  const result = Array.from(array);
  //   console.log(finalArray);
  console.log(result);
  if (count < 9) {
    setTimeout(loop, 500);
  }
}
