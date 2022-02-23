"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

const settings = {
  filter: null,
  sortBy: null,
  sortDir: "asc",
};

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  star: false,
  winner: false,
  // TODO: Add winner-info
};

function start() {
  console.log("ready");

  loadJSON();

  // TODO: Add event-listeners to filter and sort buttons
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  buildList();
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

function buildList() {
  const currentList = allAnimals; // TODO: Add filter and sort on this list, before displaying
  displayList(currentList);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data

  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // TODO: Display winner

  clone.querySelector("[data-field=winner]").dataset.winner = animal.winner;

  // TODO: Display star
  if (animal.star) {
    clone.querySelector("[data-field=star]").textContent = "⭐";
  } else {
    clone.querySelector("[data-field=star]").textContent = "☆";
  }
  // TODO: Add event listeners for star and winner
  clone.querySelector("[data-field=star]").addEventListener("click", starClick);
  function starClick() {
    console.log("star was clicked");
    if (animal.star === true) {
      animal.star = false;
    } else {
      animal.star = true;
    }
    // console.log(animal);
    buildList();
  }

  clone.querySelector("[data-field=winner]").addEventListener("click", winnerClick);
  function winnerClick() {
    console.log("winner was clicked");
    if (animal.winner === true) {
      animal.winner = false;
    } else {
      tryToMakeWinner(animal);
    }
    buildList();
  }
  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function tryToMakeWinner(selectedAnimal) {
  // take all the animals and filter them by every animal where animal.winner is true
  const winners = allAnimals.filter((animal) => animal.winner);
  const numberOfWinner = winners.length;
  const other = winners.filter((animal) => animal.type === selectedAnimal.type).shift();
  if (other !== undefined) {
    console.log("There can be only one winner of type");
    removeOtherAnimal(other);
  } else if (numberOfWinner >= 2) {
    console.log("There can only be two winners!");
    removeWinnerAorB(winners[0], winners[1]);
  } else {
    makeWinner(selectedAnimal);
  }

  // console.log(`There are ${numberOfWinner} winners`);
  // console.log(`The other animal of the same type is ${other.name} :)`);
  // console.log(other);

  // console.log(winners);
  function removeOtherAnimal(otherAnimal) {
    document.querySelector("#onlyonekind").classList.remove("dialog");
    document.querySelector("#onlyonekind .closebutton").addEventListener("click", closeDialog);
    document.querySelector("#onlyonekind [data-action=remove1]").addEventListener("click", clickRemoveOther);
    document.querySelector("#onlyonekind [data-action=remove1]").addEventListener("click", clickRemoveOther);
    // show names on buttons
    document.querySelector("#onlyonekind .animal1").textContent = otherAnimal.name + ", " + otherAnimal.type;

    function closeDialog() {
      document.querySelector("#onlyonekind").classList.add("dialog");
      // its good practice to remove event listener if u dont need it anymore
      document.querySelector("#onlyonekind .closebutton").removeEventListener("click", closeDialog);
      document.querySelector("#onlyonekind [data-action=remove1]").removeEventListener("click", clickRemoveOther);
    }

    function clickRemoveOther() {
      removeWinner(otherAnimal);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }
    // ask user to ignore or remove other
    // if ignore do nothing
    // if remove other:
    // removeWinner(otherAnimal);
    // makeWinner(selectedAnimal);
  }
  function removeWinnerAorB(winnerA, winnerB) {
    document.querySelector("#onlytwowinners").classList.remove("dialog");
    document.querySelector("#onlytwowinners .closebutton").addEventListener("click", closeDialog);
    document.querySelector("#onlytwowinners [data-action=remove1]").addEventListener("click", clickRemoveA);
    document.querySelector("#onlytwowinners [data-action=remove2]").addEventListener("click", clickRemoveB);

    // show names on buttons
    document.querySelector("#onlytwowinners .animal1").textContent = winnerA.name + ", " + winnerA.type;
    document.querySelector("#onlytwowinners .animal2").textContent = winnerB.name + ", " + winnerB.type;
    // document.querySelector("#onlytwowinners .animal1").textContent = winnerA.type;
    // document.querySelector("#onlytwowinners .animal2").textContent = winnerB.type;

    function closeDialog() {
      document.querySelector("#onlytwowinners").classList.add("dialog");
      // its good practice to remove event listener if u dont need it anymore
      document.querySelector("#onlytwowinners .closebutton").removeEventListener("click", closeDialog);
      document.querySelector("#onlytwowinners [data-action=remove1]").removeEventListener("click", clickRemoveA);
      document.querySelector("#onlytwowinners [data-action=remove2]").removeEventListener("click", clickRemoveB);
    }

    function clickRemoveA() {
      removeWinner(winnerA);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }

    function clickRemoveB() {
      removeWinner(winnerB);
      makeWinner(selectedAnimal);
      buildList();
      closeDialog();
    }

    // ask user to ignore or remove A or B
    // if ignore do nothing
    // if remove A
    // removeWinner(winnerA);
    // makeWinner(selectedAnimal);
    // if remove B
    // removeWinner(winnerB);
    // makeWinner(selectedAnimal);
  }
  function removeWinner(winnerAnimal) {
    winnerAnimal.winner = false;
  }
  function makeWinner(animal) {
    animal.winner = true;
  }
}
