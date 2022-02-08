"use strict";
let max;
let i = 0;
init();
function init() {
  max = 11;
  loop();
}

function loop() {
  console.log("i", i);
  i++;
  if (i < max) {
    setTimeout(loop, 100);
  }
}
