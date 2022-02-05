// setting up

// click calculate
document.querySelector("#calculate").addEventListener("click", calculateResult);

function calculateResult() {
  console.log("result");

  // read first number
  const firstnumber = document.querySelector("#firstnumber").value;
  // write to field
  //   firstnumber = result;
  // read second number
  const secondnumber = document.querySelector("#secondnumber").value;
  // read operator
  const operator = document.querySelector("#operator").value;
  // checking checkbox
  const doround = document.querySelector("#doround").checked;
  // add - calculate 1st +2nd
  // substract - calculate 1st - 2nd
  // divide - calculate 1st / 2nd
  // multiply - calculate 1st * 2nd
  if (operator === "add") {
    firstnumber + secondnumber;
    console.log(firstnumber + secondnumber);
  } else if (operator === "sub") {
    firstnumber - secondnumber;
    console.log("minus");
  } else if (operator === "mul") {
    firstnumber * secondnumber;
    console.log("multiply");
  } else if (operator === "div") {
    firstnumber / secondnumber;
    console.log("divide");
  }

  // check if result should be rounded
  //  if - do rounding - read number of decimals - round result to number of decimals
  // else - write result into first number field

  // append result to end of list

  // scroll list to the bottom
}

// click clearResults
document.querySelector("#clear").addEventListener("click", clearResult);
function clearResult() {
  console.log("clear result");
  // clear list of results
}
