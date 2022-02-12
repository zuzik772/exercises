const person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

// console.log(person1.lastName);
// person1.lastName = "Lind";
// console.log(person1.lastName);
// person1.lastName = undefined;
// console.log(person1.lastName);
// console.log(person1.middleName);
// delete person1.lastName;
// console.log(person1.lastName);
// console.log(person1);

const person2 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

console.log(person2);
// const person3 = person2;
// person3.firstName = "ZUzka";
// console.log(person2.firstName);
person1.firstName = person2.firstName;
person1.lastName = person2.lastName;
person1.age = person2.age;
console.log(person1);
console.log(person2);
if (person2 == person1) {
  console.log("yes");
} else {
  console.log("no");
}

console.log("new exercise");
const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};
const animal = Object.create(Animal);
Animal.image = "image.jpg";
console.log(Animal);
console.log(animal);
