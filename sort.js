// let people = ["Zuz", "Mis", "zuz", "Kubik"];
// console.log(people.sort());

// for objects use this function
function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
}

let animals = [
  { name: "Freddie", type: "dog" },
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "LeeLoo", type: "dog" },
  { name: "ScoobyDoo", type: "dog" },
];

let sortedAnimals = animals.sort(compareName);
// console.log(sortedAnimals);

let filteredAnimals = animals.filter(filterAnimals);

function filterAnimals(animals) {
  if (animals.type === "dog") {
    return true;
  } else {
    return false;
  }
}

console.log(filteredAnimals);

// FILTER COMES FIRST SO IT CAN SORT LESS ITEMS AT A TIME
