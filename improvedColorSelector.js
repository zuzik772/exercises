`use-strict`;

window.addEventListener("load", start);
const colorData = {};
function start() {
  colorData.input = document.querySelector("#colorpicker");
  colorData.hex = document.querySelector("#hex");
  colorData.rgb = document.querySelector("#rgb");
  colorData.hsl = document.querySelector("#hsl");
  colorData.colorBox = document.querySelector("#color");

  colorData.input.addEventListener("input", getColor);
}

function getColor() {
  changeColor(colorData.input.value);
}

function changeColor() {
  colorData.colorBox.style.backgoundColor = `${getColor}`;
  showHEX(getColor);
}

function showHEX(hexColor) {
  colorData.hex.textContent = hexColor;
  console.log(hexColor);
  hexToRGB(hexColor);
}

function hexToRGB(hexStr) {
  let r = parseInt(hexStr.substring(1, 3), 16);
  let g = parseInt(hexStr.substring(3, 5), 16);
  let b = parseInt(hexStr.substring(5), 16);
  let rgbObject = { r, g, b };
  showRGB(rgbObject);
}

function showRGB(rgbObject) {
  colorData.rgb.textContent = `${rgbObject.r},${rgbObject.g},${rgbObject.b}`;
  rgbToHSL(rgbObject);
}

function rgbToHSL(rgbObject) {
  let r = rgbObject.r;
  let g = rgbObject.g;
  let b = rgbObject.b;

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

  // console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

  let hslObject = { h, s, l };
  showHSL(hslObject);
}

function showHSL(hslObject) {
  let h = hslObject.h.toFixed(0) + "%";
  let s = hslObject.s.toFixed(0) + "%";
  let l = hslObject.l.toFixed(0) + "%";
  colorData.hsl.textContent = h + s + l;
}
