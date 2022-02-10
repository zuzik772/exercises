// let model = [
//   1, 6, 3, 32, 30, 32, 4, 27, 23, 24, 10, 32, 26, 24, 4, 30, 23, 24, 10, 32, 26,
//   24, 12, 31, 21, 32, 12, 11, 2, 30, 1, 6, 32, 12, 24, 23, 12, 27, 25, 1,
// ];
let model = [];
let allBars = document.querySelectorAll(".bar");
// allBars[9].style.backgroundColor = "blue";
function view() {
  console.log("*************");
  allBars.forEach((el, i) => {
    console.log(model[i]);
    el.style.height = `${model[i]}px`;
  });
}

init();
function init() {
  loop();
}

function loop() {
  model.unshift(getCustomers());
  model = model.slice(0, 40);
  //   console.log(model);
  view();
  setTimeout(loop, 2000);
}

function getCustomers() {
  return Math.floor(Math.random() * 32);
}
