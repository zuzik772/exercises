"use strict";
console.log("\\u{1f2345}");
console.log("why is it not working");

const name = "Jakub";
console.log(name);
const drink = "pivo";
console.log(drink);
console.log(`hello, ${name} chces,
 ${drink}?`);

// classic concatenation:
console.log("hello " + name + " chces" + drink + " ? ");

let myName = "Zuzana";
let myAnimal = "dogs";
let len = myName.length;
let letter = myName[0];
console.log(`hello my name is ${myName} my name has ${len} characters
and starts with ${letter}`);

// methods
const str1 = "     there is    space here \n ";
const str2 = str1.trim();
console.log(str2);

let fullname = "Zuzana Chudinova";
let firstname = fullname.substring(7);
console.log(`_${firstname}_`);

const points = [40, 100, 1, 5, 25, 10];
myFunction1();
function myFunction1() {
  points.sort();
  console.log(points.sort());
}

let message;
message = "hello darling";
// alert(NaN ** 0);

let age;
// alert(age);

let meno = "Ilya";

console.log(`hello ${1}`); // ?

console.log(`hello ${"meno"}`); // ?

console.log(`hello ${meno}`); // ?

// alert((123456).toString(36));
// alert(0.1 + 0.2 == 0.3);
let sum = 0.1 + 0.2;
// alert(+sum.toFixed(2)); // 0.3
// alert((0.1 * 10 + 0.2 * 10) / 10); // 0.3
// alert((0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001
// Hello! I'm a self-increasing number!
// alert(9999999999999999); // shows 10000000000000000
// alert(NaN === NaN); // false
alert(isNaN(NaN)); // true
alert(isNaN("str")); // true
alert(isNaN(1)); // false