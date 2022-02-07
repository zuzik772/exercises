// let str = "Peter Heronimous Lind";
let str = "Albus Percival Wulfric Brian Dumbledore";
let firstName = str.substring(str,str.indexOf(" "));
let middleName = str.substring(str.indexOf(" ") + 1,str.lastIndexOf(" ") );
let lastName = str.substring(str.lastIndexOf(" ")+1);
console.log(firstName);
console.log(middleName);
console.log(lastName);

