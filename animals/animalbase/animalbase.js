"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
let filter = "all";

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");
  // TODO: Add event-listeners to filter and sort buttons
  // document.querySelector("[data-filter=cat]").addEventListener("click", buildFilteredList);
  const filterBtns = document.querySelectorAll("[data-action=filter]");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", buildFilteredList);
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
  animals.sort(compareName);
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

function buildFilteredList() {
  let filteredList;
  filter = this.dataset.filter;
  console.log(this);
  if (filter === "cat") {
    console.log("its a cat");
    filteredList = filterAnimal(isCat);
  } else if (filter === "dog") {
    filteredList = filterAnimal(isDog);
  } else if (filter === "all") {
    filteredList = filterAnimal(isAllAnimal);
  }
  filteredList.sort(compareName);
  displayList(filteredList);
}

function filterAnimal(filteredAnimal) {
  let filteredAnimals = allAnimals.filter(filteredAnimal);
  return filteredAnimals;
}

function isAllAnimal() {
  return true;
}

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

function isDragon(animal) {
  if (animal.type === "dragon") {
    return true;
  } else {
    return false;
  }
}

function isHorse(animal) {
  if (animal.type === "horse") {
    return true;
  } else {
    return false;
  }
}

// filter function as argument

// sort function
function compareName(a, b) {
  console.log("compare name");
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
}
