// let model = [
//   1, 6, 3, 32, 30, 32, 4, 27, 23, 24, 10, 32, 26, 24, 4, 30, 23, 24, 10, 32, 26,
//   24, 12, 31, 21, 32, 12, 11, 2, 30, 1, 6, 32, 12, 24, 23, 12, 27, 25, 1,
// ];
let i = 0;
let model = [];
let allBars = document.querySelectorAll(".bar");
// allBars[9].style.backgroundColor = "blue";
// function view() {
//   console.log("*************");
//   allBars.forEach((el, i) => {
//     console.log("i", i);
//     console.log(model);
//     el.style.height = `${model[i]}px`;
//     console.log("model length", model.length);
//     // allBars[model.length - 1].style.backgroundColor = "grey";
//     el.style.backgroundColor = "blue";
//   });
// }

init();
function init() {
  loop();
}

function loop() {
  model.push(getCustomers());
  if (model.length === 40) {
    model.shift();
  }

  console.log("how many times");
  // model = model.slice(0, 40);
  //   console.log(model);
  allBars[model.length].style.height = `${model[i]}px`;
  i++;
  setTimeout(() => loop(), 1000);
  // setTimeout(loop(), 800);
}

function getCustomers() {
  return Math.floor(Math.random() * 32);
}
