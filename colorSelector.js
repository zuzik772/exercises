"use-strict";
let colorInput = document.querySelector("#colorpicker");
function getColor(colorpicker) {
  return colorpicker.value;
}

function display(container, color) {
  container.textContent = color;
}

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

// // HEX to RGB
// let hexStr = "#c0ffee";
function hexToRGB(hexStr) {
  r = hexStr.substring(1, 3);
  rNumber = parseInt(r, 16);

  g = hexStr.substring(3, 5);
  gNumber = parseInt(g, 16);

  b = hexStr.substring(5);
  bNumber = parseInt(b, 16);
  // return "rgb color is " + r + "," + g + "," + b;
  console.log(rNumber, gNumber, bNumber);
  return rNumber + "," + gNumber + "," + bNumber;
}
// hexToRGB(hexStr);

//HEX to RGB
// function hexToRGB(hexstring) {
//   let red = lettersToNumbers(hexstring.charAt(1)) * 16 + lettersToNumbers(hexstring.charAt(2));
//   let green = lettersToNumbers(hexstring.charAt(3)) * 16 + lettersToNumbers(hexstring.charAt(4));
//   let blue = lettersToNumbers(hexstring.charAt(5)) * 16 + lettersToNumbers(hexstring.charAt(6));
//   return red + ", " + green + ", " + blue;
//   //   console.log(red, green, blue);
//   //   return { red, green, blue };
// }

// function lettersToNumbers(character) {
//   let number = character.toUpperCase().charCodeAt(0);
//   if (number > 64) {
//     return number - 55;
//   } else return Number(character);
// }

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
