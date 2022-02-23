"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
// let animalType = "all";
let filteredArray;
// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

const settings = {
  isSortDir: false,
};

function start() {
  console.log("ready");
  // TODO: Add event-listeners to filter and sort buttons
  // filtering
  const filterBtns = document.querySelectorAll("[data-action=filter]");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterList(this.dataset.filter);
    });
  });
  // sorting
  const sortBtns = document.querySelectorAll("[data-action=sort]");
  sortBtns.forEach((sortBtn) => {
    sortBtn.addEventListener("click", function () {
      if (settings.isSortDir === true) {
        settings.isSortDir = false;
        console.log("its false");
        sortList(filteredArray, this.dataset.sort, "asc");
      } else {
        settings.isSortDir = true;
        console.log("its true");
        sortList(filteredArray, this.dataset.sort, "desc");
      }

      // sortList(filteredArray, this.dataset.sort);
    });
  });

  loadJSON();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);
  filteredArray = allAnimals;
  // TODO: This might not be the function we want to call first

  //   if (document.querySelector("[data-filter=cat]").clicked == true) {
  //     filterAnimal(isCat);
  //   }
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
  // animals.sort(compareName);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function filterList(type) {
  let list = allAnimals.filter(isAnimalType);
  function isAnimalType(animal) {
    if (animal.type === type) {
      return true;
    } else {
      return false;
    }
  }

  if (list.length === 0) {
    list = allAnimals;
  }
  filteredArray = list;
  console.log("here", filteredArray);
  displayList(filteredArray);

  // if (type === "*") {
  //   displayList(allAnimals);
  // }
}

// function buildFilteredList() {
//   let filteredList;
//   animalType = this.dataset.filter;
//   if (animalType === "cat") {
//     console.log("its a cat");
//     filteredList = filterAnimal(isCat);
//   } else if (animalType === "dog") {
//     filteredList = filterAnimal(isDog);
//   } else if (animalType === "all") {
//     filteredList = filterAnimal(isAllAnimal);
//   }
//   // filteredList.sort(compareName);
//   displayList(filteredList);
// }

// function filterAnimal(filteredAnimal) {
//   let filteredAnimals = allAnimals.filter(filteredAnimal);
//   // filteredAnimals.sort(compareName);
//   return filteredAnimals;
// }

// function isAllAnimal() {
//   return true;
// }

// function isCat(animal) {
//   if (animal.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isDog(animal) {
//   if (animal.type === "dog") {
//     return true;
//   } else {
//     return false;
//   }
// }

// SORTING
function sortList(arr, propertyName, direction) {
  let list = arr.sort(isPropertyName);
  if (direction === "desc") {
    list = list.reverse();
  }
  console.log(list);
  function isPropertyName(animalA, animalB) {
    if (animalA[propertyName] < animalB[propertyName]) {
      return -1;
    } else {
      return 1;
    }
  }

  displayList(list);

  // if (type === "*") {
  //   displayList(allAnimals);
  // }
}

// function buildSortedList() {
//   let sortedList;
//   let propertyName = this.dataset.sort;
//   // let direction = (this.direction = "asc");
//   console.log("sorted List", sortedList);
//   if (propertyName === "name") {
//     console.log("sort name");
//     sortedList = sortAnimal(compareName);
//   } else if (propertyName === "type") {
//     sortedList = sortAnimal(compareType);
//   } else if (propertyName === "desc") {
//     sortedList = sortAnimal(compareDesc);
//   } else if (propertyName === "age") {
//     sortedList = sortAnimal(compareAge);
//   }
//   // reverseAnimal(sortedList);
//   displayList(sortedList);
// }

// function sortAnimal(sortAnimals) {
//   let sortedAnimals = filterList().sort(sortAnimals);
//   console.log(sortedAnimals);
//   return sortedAnimals;
// }

// function reverseAnimal(reverseAnimals) {
//   let reversedAnimals = allAnimals.reverse(reverseAnimals);
//   console.log(reversedAnimals);
//   return reversedAnimals;
// }

// sort function
// function compareName(a, b) {
//   console.log("compare name");

//   if (a.name < b.name) {
//     return -1;
//   } else {
//     return 1;
//   }
// }

// function compareType(a, b) {
//   console.log("compare type");
//   if (a.type < b.type) {
//     return -1;
//   } else {
//     return 1;
//   }
// }

// function compareDesc(a, b) {
//   console.log("compare description");
//   if (a.desc < b.desc) {
//     return -1;
//   } else {
//     return 1;
//   }
// }

// function compareAge(a, b) {
//   console.log("compare age");
//   if (a.age < b.age) {
//     return -1;
//   } else {
//     return 1;
//   }
// }
