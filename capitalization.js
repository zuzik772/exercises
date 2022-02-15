// let firstName = "PEtER";
// console.log(firstName.substring(0, 1).toUpperCase() + firstName.substring(1).toLowerCase());

// capitalization using function and parameters

function capitalize(str) {
  str = str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  console.log(str);
}

capitalize("agA sSu");
