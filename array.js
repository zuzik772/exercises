// const array = ["a", "b", "c", "d"];
// console.log(array[2]);
// let newarray = array;
// newarray[2] = "$";
// console.log(array[2]);
// console.log(newarray);

const people = ["Mis", "Zuz", "Kubo"];
let result;
// result = people.push("Tatko");
// console.log("result" + result);
// console.log("people" + people);
// result = people.push("Tatko");
// console.log("result" + result);
// console.log("people" + people);
// result = people.pop();
// console.log("lastresult" + result);
// console.log("people" + people);
// result = people.push("mamka");
// console.log(people);

// result = people.pop();
// console.log("people" + people);
// console.log(result);
// result = people.slice(0, -1);
// console.log(people);
// console.log(result);
// people.splice(1, 1, "dom");
// console.log(people);
// result = people.push("mamka", "tatko");
// console.log(people);
// // result = people.indexOf("mamka");
// console.log(result);
result = people.splice(result, 1);
console.log("result" + result);

styles = ["jazz", "blues"];
styles.push("rock&roll");
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "classics";
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("rap", "reggae");
console.log(styles);

let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2]();
