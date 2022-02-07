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
