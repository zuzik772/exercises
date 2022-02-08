window.addEventListener("load", start);

let results = [];
let list = document.getElementById("results");

function start() {
  document.querySelector("#calculate").addEventListener("click", calculate);
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function calculate() {
  let first = parseFloat(document.querySelector("#firstnumber").value);
  let second = parseFloat(document.querySelector("#secondnumber").value);
  let operation =
    document.getElementById("operator").options[operator.selectedIndex].value;
  let li = document.createElement("li");
  let result;

  if (operation === "add") {
    result = first + second;
  } else if (operation === "sub") {
    result = first - second;
  } else if (operation === "mul") {
    result = first * second;
  } else if (operation === "div") {
    result = first / second;
  }

  if (document.getElementById("doround").checked) {
    result = result.toFixed(
      parseInt(
        document.getElementById("decimals").options[decimals.selectedIndex]
          .value
      )
    );
  }

  li.innerText = result;
  document.querySelector("#firstnumber").value = result;
  list.appendChild(li);
}

function clearResults() {
  const myNode = document.getElementById("results");
  while (myNode.childNodes.length > 2) {
    myNode.removeChild(myNode.lastChild);
  }
}

// help from the teacher

window.addEventListener("DOMContentLoaded", setUp),
  function setUp() {
    document.getElementById("calculate").addEventListener("click", calcClick);
    document.getElementById("clear").addEventListener("click", clearClick);
  };

function calcClick() {
  console.log("CALC");
  console.log("operator is:", document.getElementById("operator").value);
  const opValue = document.getElementById("operator").value;
  const firstNumber = Number(document.getElementById("firstnumber").value);
  const secondNumber = Number(document.getElementById("secondnumber").value);
  let result;
  if (opValue === "add") {
    result = firstNumber + secondNumber;
  }
  if (opValue === "min") {
    result = firstNumber - secondNumber;
  }
  if (opValue === "sub") {
    result = firstNumber / secondNumber;
  }
  if (opValue === "mul") {
    result = firstNumber * secondNumber;
  }
  let numberOfDecimals = 0;
  // const numberOfDecimals = Number(document.getElementById("decimals").value);
  console.log("checkbox", document.getElementById("doround".checked));

  if (document.getElementById("doround".checked)) {
    numberOfDecimals = document.getElementById("decimals").value;
  }
  console.log("result", result.toFixed(numberOfDecimals));
  console.log("typeof numberof decimals", typeof numberOfDecimals);
}

function clearClick() {
  console.log("CLEAR");
}
