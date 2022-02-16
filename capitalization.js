// let firstName = "PEtER";
// console.log(firstName.substring(0, 1).toUpperCase() + firstName.substring(1).toLowerCase());

// capitalization using function and parameters

function capitalize(str) {
  capFN = str.substring(0, 1).toUpperCase() + str.substring(1, str.indexOf(" ")).toLowerCase();
  capMN = str.substring(str.indexOf(" ") + 1, str.indexOf(" ") + 2).toUpperCase() + str.substring(str.indexOf(" ") + 2, str.lastIndexOf(" ")).toLowerCase();
  capLN = str.substring(str.lastIndexOf(" ") + 1, str.lastIndexOf(" ") + 2).toUpperCase() + str.substring(str.lastIndexOf(" ") + 2).toLowerCase(); //,str.lastIndexOf((" ") +2).toUpperCase().toLowerCase());
  return { capFN, capMN, capLN };
}
// const name = "pETer";
const string = "agatka mna szulc";
console.log(capitalize(string));
