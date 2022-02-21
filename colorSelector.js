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
  r = parseInt(hexStr.substring(1, 3), 16);
  g = parseInt(hexStr.substring(3, 5), 16);
  b = parseInt(hexStr.substring(5), 16);

  return r + "," + g + "," + b;
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
