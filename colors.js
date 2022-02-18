// css to RGB function || exercise

function cssToRGB(cssStr) {
  r = cssStr.substring(cssStr.indexOf("(") + 1, cssStr.indexOf(",")).trim(); //192
  let rNumber = parseInt(r);
  console.log(rNumber);
  g = cssStr.substring(cssStr.indexOf(",") + 1, cssStr.lastIndexOf(",")).trim(); //13
  let gNumber = parseInt(g);
  console.log(gNumber);
  b = cssStr.substring(cssStr.lastIndexOf(",") + 1, cssStr.lastIndexOf(")")).trim(); //1
  let bNumber = parseInt(b);
  console.log(bNumber);
  // return { rNumber, gNumber, bNumber };
  return `${rNumber}, ${gNumber}, ${bNumber}`;
}
let cssOtherStr = "rgb(192, 13, 1)";
let rgbResult = cssToRGB(cssOtherStr);
console.log(rgbResult);

// RGB to CSS (string)
function rgbToCSS(rNum, gNum, bNum) {
  let rString = rNum.toString();
  let gString = gNum.toString();
  let bString = bNum.toString();
  let cssStr = `rgb(${rString}, ${gString}, ${bString})`;
  console.log(`rgb(${rString}, ${gString}, ${bString})`);
  return cssStr;
}
let rgbToCSSResult = rgbToCSS(192, 13, 1);
console.log("we are here:", rgbToCSSResult);

// HEX to RGB function
// let hexStr = "#c0ffee";
function hexToRGB(hexStr) {
  r = hexStr.substring(1, 3);
  console.log(r);
  rNumber = parseInt(r, 16);
  console.log(rNumber);

  g = hexStr.substring(3, 5);
  console.log(g);
  gNumber = parseInt(g, 16);
  console.log(gNumber);

  b = hexStr.substring(5);
  console.log(b);
  bNumber = parseInt(b, 16);
  console.log(bNumber);
  return rNumber + "," + gNumber + "," + bNumber;
}

let result = hexToRGB("#c0ffee");
console.log("this is result " + result);
// let numberAsHex = "f3";
// let numberAsInteger = parseInt(numberAsHex, 16); //second argument is the base
// console.log("number  as integer", numberAsInteger);

//from RGB to HEX
let rgbObject = {
  r: 186,
  g: 218,
  b: 85,
};
function rgbToHEX(r, g, b) {
  r = rgbObject.r;
  g = rgbObject.g;
  b = rgbObject.b;
  hexStr = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return hexStr;
}

console.log(rgbToHEX(rgbObject));

// RGB values between 0-255
// ff (full colour) = 255, the higheste value in RGB
// let someNumberAsInteger = 255;
// let someBase16NumberAsString = someNumberAsInteger.toString(16);
// console.log("someBase16NumberAsString", someBase16NumberAsString);

// simple integer convertion
// let simpleNumberAsString = "234";
// let simpleNumber = parseInt(numberAsString);
// console.log(parseInt(numberAsString));
