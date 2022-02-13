let counter;
let newEl;
// let myTimeout = setTimeout(function () {
//   console.log("count", counter);
// }, 3000 * (counter + 1));
// let art = document.querySelectorAll(".artwork");
let artwork1 = document.querySelector("#artwork1");
let artwork2 = document.querySelector("#artwork2");
let artwork3 = document.querySelector("#artwork3");
let artwork4 = document.querySelector("#artwork4");
let artwork5 = document.querySelector("#artwork5");
let artwork6 = document.querySelector("#artwork6");
let artwork7 = document.querySelector("#artwork7");
let artwork8 = document.querySelector("#artwork8");
let artwork9 = document.querySelector("#artwork9");
("use-strict");
window.addEventListener("load", start);

// art = Array.from(art);
// art.forEach(appendNewEl);

function start() {
  // artwork1
  for (let i = 100; i <= 300; i += 20) {
    counter = i;
    addArt1();
    // myTimeout;
  }
}
function addArt1() {
  createArt();
  newEl.classList.add("box");
  artwork1.appendChild(newEl);
  console.log("art1", counter);
}

// artwork2
for (let i = 0; i <= 90; i += 10) {
  counter = i;
  addArt2();
  // myTimeout;
}

function addArt2() {
  newEl = document.createElement("div");
  newEl.style.transform = `rotate(${counter}deg)`;
  newEl.classList.add("box");
  artwork2.appendChild(newEl);
  console.log("art2", counter);
}

// artwork3
for (let i = 0; i <= 200; i += 10) {
  counter = i;
  addArt3();
  // myTimeout;
}

function addArt3() {
  createArt();
  newEl.classList.add("circle");
  artwork3.appendChild(newEl);
  console.log("art3", counter);
}

// artwork4
for (let i = -90; i <= 90; i += 20) {
  counter = i;
  addArt4();
  // myTimeout;
  console.log("i", i);
}

function addArt4() {
  newEl = document.createElement("div");
  newEl.style.transform = `translate(${counter}px,${counter}px)`;
  newEl.classList.add("box");
  artwork4.appendChild(newEl);
  console.log("art4", counter);
}

// artwork5;
for (let i = 1; i <= 412; i *= 2) {
  counter = i;
  addArt5();
  // myTimeout;
}

function addArt5() {
  createArt();
  newEl.classList.add("circle");
  artwork5.appendChild(newEl);
  console.log("art5", counter);
}

// artwork6;
for (let i = -20; i <= 45; i += 5) {
  counter = i;
  addArt6();
  // myTimeout;
}

function addArt6() {
  newEl = document.createElement("div");
  newEl.style.transform = `translateX(${counter - 50}px)`;
  newEl.style.transform = `rotate(${counter * 4}deg)`;
  newEl.classList.add("circle");
  artwork6.appendChild(newEl);
  console.log("art6", counter);
}

// artwork7;
for (let i = 0; i <= 200; i += 10) {
  counter = i;
  addArt7();
  // myTimeout;
}

function addArt7() {
  createArt();
  newEl.style.transform = `translate(${counter}px,${-counter / 2}px)`;
  newEl.classList.add("circle");
  artwork7.appendChild(newEl);
  console.log("art7", counter);
}

// artwork8;
for (let i = 50; i <= 200; i += 10) {
  counter = i;
  addArt8();
  // myTimeout;
}

function addArt8() {
  createArt();
  newEl.style.transform = `translateX(${counter / 2}px)`;
  newEl.style.transform = `rotate(${counter}deg)`;
  newEl.classList.add("box");
  artwork8.appendChild(newEl);
  console.log("art7", counter);
}

// artwork9
for (let i = 50; i <= 200; i += 30) {
  counter = i;
  addArt9();
  addArt10();
  // myTimeout;
}

function addArt9() {
  createArt();
  newEl.classList.add("box");
  artwork9.appendChild(newEl);
  console.log("art9", counter);
}

function addArt10() {
  createArt();
  newEl.classList.add("circle");
  artwork9.appendChild(newEl);
}

function createArt() {
  newEl = document.createElement("div");
  newEl.style.width = `${counter}px`;
  newEl.style.height = `${counter}px`;
}
