// setting up
window.addEventListener("load", start);
let results = [];
let listResults = document.getElementById("results");

function start() {
  document
    .querySelector("#calculate")
    .addEventListener("click", calculateResult);
  document.querySelector("#clear").addEventListener("click", clearResult);
}

function calculateResult() {
  console.log("it works");
  let firstnumber = parseFloat(document.querySelector("#firstnumber").value);
  let secondnumber = parseFloat(document.querySelector("#secondnumber").value);
  let operation =
    document.getElementById("operator").options[operator.selectedIndex].value;
  let listItem = document.createElement("li");
  let result;

  // add - calculate 1st +2nd
  // substract - calculate 1st - 2nd
  // divide - calculate 1st / 2nd
  // multiply - calculate 1st * 2nd
  if (operation === "add") {
    result = firstnumber + secondnumber;
    console.log("plus");
  } else if (operation === "sub") {
    result = firstnumber - secondnumber;
    console.log("minus");
  } else if (operation === "mul") {
    result = firstnumber * secondnumber;
    console.log("multiply");
  } else if (operation === "div") {
    result = firstnumber / secondnumber;
    console.log("divide");
  }

  if (document.getElementById("doround").checked) {
    result = result.toFixed(
      parseInt(
        document.getElementById("decimals").options[decimals.selectedIndex]
          .value
      )
    );
  }

  listItem.innerHTML = result;
  firstnumber = result;
  listResults.appendChild(listItem);
}

function clearResult() {
  console.log("clear result");
  const node = document.getElementById("results");
  while (node.childNodes.length > 2) {
    node.removeChild(node.lastChild);
  }
}
