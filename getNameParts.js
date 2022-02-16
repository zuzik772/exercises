"use-strict";

let string = "zuzAna IJADK  chUDI";
getNameParts(string);

function getNameParts(str) {
  //   capitalize(string);
  firstName = str.substring(str, str.indexOf(" "));
  //   console.log("FN " + firstName);
  middleName = str.substring(str.indexOf(" ") + 1, str.lastIndexOf(" "));
  //   console.log("MN " + middleName);
  lastName = str.substring(str.lastIndexOf(" ") + 1);
  //   console.log("LN " + lastName);
  console.log(capitalize(string));
  //   if (middleName !== undefined) {
  //     // console.log(`${firstName} ${middleName} ${lastName}`);
  //     capitalize(firstName);
  //     return { firstName, middleName, lastName };
  //   } else {
  //     // console.log(`${firstName} ${lastName}`);
  //     capitalize(firstName);
  //     return { firstName, lastName };
  //   }
}

function capitalize(str) {
  capFN = str.substring(0, 1).toUpperCase() + str.substring(1, str.indexOf(" ")).toLowerCase();
  capMN = str.substring(str.indexOf(" ") + 1, str.indexOf(" ") + 2).toUpperCase() + str.substring(str.indexOf(" ") + 2, str.lastIndexOf(" ")).toLowerCase();
  capLN = str.substring(str.lastIndexOf(" ") + 1, str.lastIndexOf(" ") + 2).toUpperCase() + str.substring(str.lastIndexOf(" ") + 2).toLowerCase(); //,str.lastIndexOf((" ") +2).toUpperCase().toLowerCase());
  console.log("it works");
  return { capFN, capMN, capLN };
}
// console.log(capitalize(string));
