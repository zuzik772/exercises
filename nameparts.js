// let str = "Peter Heronimous Lind";
let str = "Albus Percival Wulfric Brian Dumbledore";
let firstName = str.substring(str, str.indexOf(" "));
let middleName = str.substring(str.indexOf(" ") + 1, str.lastIndexOf(" "));
let lastName = str.substring(str.lastIndexOf(" ") + 1);

// using split
// let arrayStr = str.split(" ");
// let firstName = arrayStr[0];
// let middleName = "";
// let i;
// for (i = 1; i < arrayStr.length - 1; i++) {
//   console.log("i", i);
//   middleName = middleName + " " + arrayStr[i];
//   console.log(middleName);
// }
// let lastName = arrayStr[arrayStr.length - 1];
console.log("FN", firstName);
console.log("MN", middleName);
console.log("LN", lastName);

//  using function and parameters
function giveName(firstName, middleName, lastName) {
  // console.log({ firstName, middleName, lastName });
  return firstName + middleName + lastName;
}

giveName(firstName, middleName, lastName);

// fullname exercise
function fullName(lastName, firstName, middleName) {
  if (middleName !== undefined) {
    // console.log(`${firstName} ${middleName} ${lastName}`);
    return firstName + middleName + lastName;
  } else {
    // console.log(`${firstName} ${lastName}`);
    return firstName + lastName;
  }
}

let result = fullName("Potter", "Harry", "James");
result = fullName("Potter", "Harry");
fullName("Potter", "Harry", "James", "Pottypotpot");

console.log(result);
