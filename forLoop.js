// for (let counter = 10; counter >= 0; counter--) {
//   console.log(counter);
// }
// console.log("liftoff");

// only counts odd numbers
// counter += 2;
// counter = counter + 2;
// for (let counter = 1; counter <= 19; counter =counter+2) {
//   console.log(counter);
// }

// for (let counter = 1; counter <= 19; counter += 2) {
//   console.log(counter);
// }

// let counter = 2;
// while (counter) {
//   alert(counter);
//   counter--;
// }

// let i = 3;
// while (i) alert(i--);

// The “do…while” loop

// let i = 0;
// do {
//   alert(i);
//   i++;
// } while (i < 3);

// The “for” loop
// for (begin; condition; step) {
// ... loop body ...}

// let i = 0;
// for (; i < 3; ) {
//   alert(i++);
// }

// for (;;) {
// repeats without limits

// let sum = 0;
// while (true) {
//   let value = +prompt("enter a number", "");
//   if (!value) break;
//   sum += value;
// }
// alert("sum" + sum);

// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
// to output only odd values - i use continue
// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) continue;
//   alert(i);
// }
// The continue directive helps decrease nesting

// for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     alert(i);
//   }
// }
// In the code above, break outer looks upwards for the label named outer and breaks out of that loop.
// So the control goes straight from (*) to alert('Done!').

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");

//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)

//     // do something with the value...
//   }
// }
// alert("Done!");

// SUMMARY
// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available.

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
//   i++;
// }

for (let i = (setTimeout(() => console.log(i)), 0); i < 2; i++) {
  i++;
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}