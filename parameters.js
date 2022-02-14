"use-strict";
// sayHello("Zuzik");

function sayHello(firstName) {
  // firstName = "zuz";
  // lastName = "chudi";
  console.log(`hello, ${firstName}`);
}
sayHello("overwrite Zuz");
// let myName = sayHello();
// let myName = sayHello();
// let firstName = "mis";
// console.log(firstName);
// console.log(myName);
// let myName = sayHello();
// let firstName = "Zuz";

// 3 types of functions
sayHi("HIIII");
function sayHi(firstName) {
  console.log(`Hi ${firstName}`);
}

let sayWhat = function (firstName) {
  console.log(`say what ${firstName}`);
};

let sayHoney = (firstName) => {
  console.log(`say honey ${firstName}`);
};
// sayHi("HIIII");
// sayWhat("WHAAAT");
// sayHoney("HONEY DARLING");

// new exercise
function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
}

let firstName = presentPet("Zuzana", "dog", "Rex");
