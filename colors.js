//from HEX to RGB

let numberAsHex = "f3";
let numberAsInteger = parseInt(numberAsHex, 16); //second argument is the base

console.log("number  as integer", numberAsInteger);

//  from RGB to HEX

// RGB values between 0-255
// ff (full colour) = 255, the higheste value in RGB
let someNumberAsInteger = 255;
let someBase16NumberAsString = someNumberAsInteger.toString(16);
console.log("someBase16NumberAsString", someBase16NumberAsString);

// simple integer convertion
let simpleNumberAsString = "234";
let simpleNumber = parseInt(numberAsString);
console.log(parseInt(numberAsString));
