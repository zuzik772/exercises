let firstName = "PEtER";
console.log(
  firstName.substring(0, 2).toLowerCase() +
    firstName.substring(2, 3).toUpperCase() +
    firstName.substring(3).toLowerCase()
);

let str = "labrador";
console.log(str.substring(str.indexOf("d"), str.lastIndexOf("r")).toUpperCase());

