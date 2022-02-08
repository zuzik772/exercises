"use strict";
window.addEventListener("load", getText);
// activity diagram:
// 1. page load
// 2.get the text
// 3. show the text one at a time (innit loop) -> call loop, loop function, iterator ++, build string, add string to frontend, check until iterator is equal to or bigger than the length of the string, meanwhile add delay
let str = document.getElementById("typewriter").textContent;
str = str.trim();
let myText = document.querySelector(".typewritten");
let startStr = "";
let i = 0;
let soundKey = document.getElementById("typekey1");
let soundSpace = document.getElementById("typespace");
let speed = [100, 500, 1000];
let speedNumber;

function getText() {
  document.getElementById("typewriter").textContent = "";
  document.getElementById("btn").addEventListener("click", loop);
  console.log("str", str);
}
function loop() {
  console.log("loop is working");
  setTimeout(() => {
    speedNumber = Math.floor(Math.random() * 2);
    if (i < str.length + 1) {
      startStr = startStr + str.charAt(i);
      myText.textContent = startStr;
      console.log(startStr);

      if (str.charAt(i) === " ") {
        soundSpace.play();
      } else {
        soundKey.play();
      }
      loop();
    }
    i++;
  }, speed[speedNumber]);
}
