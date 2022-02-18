"use-strict";
let colorInput = document.querySelector("#colorpicker");
function getColor(colorpicker) {
  return colorpicker.value;
}

function display(container, color) {
  container.textContent = color;
}

// Showing the color as a colored box in CSS
function displayColor(container, rgbColorStr) {
  container.style.backgroundColor = `rgb(${rgbColorStr})`;
}

function displayValues() {
  let colorHEX = getColor(colorInput);
  let colorRGB = hexToRGB(colorHEX);
  let colorHSL = rgbToHSL(colorRGB);
  display(document.querySelector("#hex"), colorHEX);
  display(document.querySelector("#rgb"), colorRGB);
  display(document.querySelector("#hsl"), colorHSL);
  displayColor(document.querySelector("#color"), colorRGB);
}

// Getting a selected color from the user
// Showing a selected color (possibly a delegator for the following function calls)
// Showing the color as hex
// Showing the color as RGB
// Showing the color as HSL

// // HEX to RGB
function hexToRGB(hexStr) {
  r = hexStr.substring(1, 3);
  rNumber = parseInt(r, 16);

  g = hexStr.substring(3, 5);
  gNumber = parseInt(g, 16);

  b = hexStr.substring(5);
  bNumber = parseInt(b, 16);
  console.log("hez to RGB", rNumber, gNumber, bNumber);
  return rNumber + "," + gNumber + "," + bNumber;
}

// RGB to CSS (string)
function rgbToCSS(rNum, gNum, bNum) {
  let rString = rNum.toString();
  let gString = gNum.toString();
  let bString = bNum.toString();
  let cssStr = `rgb(${rString}, ${gString}, ${bString} )`;
  console.log(`rgb(${rString}, ${gString}, ${bString} )`);
  return cssStr;
}
let rgbToCSSResult = rgbToCSS(192, 13, 1);
console.log(rgbToCSSResult);

// RGB to HEX using object as parameter
let rgbObject = {
  r: 186,
  g: 218,
  b: 85,
};
function rgbToHEX(rgbObject) {
  let r = rgbObject.r;
  let g = rgbObject.g;
  let b = rgbObject.b;
  hexStr = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return hexStr;
}

// RGB to HSL
function rgbToHSL(rgbString) {
  let stringArray = rgbString.split(",");
  let r = stringArray[0];
  let g = stringArray[1];
  let b = stringArray[2];

  // given code
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  return h.toFixed() + "%, " + s.toFixed() + "%, " + l.toFixed() + "%";
  // return { h, s, l };
}
