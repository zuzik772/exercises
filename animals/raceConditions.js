const url1 = "https://petlatkea.dk/2021/hogwarts/students.json";
const url2 = "https://petlatkea.dk/2021/hogwarts/families.json";
// start();
// async function start() {
//   console.log("1");
//   await loadFile1();
//   console.log("2");
//   await loadFile2();
//   console.log("3");
//   useData();
// }

// async function loadFile1() {
//   const resp = await fetch(url1);
//   const data = await resp.json();
//   console.log("4");
// }

// async function loadFile2() {
//   const resp = await fetch(url2);
//   const data = await resp.json();
//   console.log("5");
// }

// function useData() {
//   console.log("6");
// }

// or

start();
function start() {
  console.log("1");
  loadFile1();
  console.log("2");
  console.log("3");
}

async function loadFile1() {
  const resp = await fetch(url1);
  const data = await resp.json();
  console.log("4");
  loadFile2();
}

async function loadFile2() {
  const resp = await fetch(url2);
  const data = await resp.json();
  console.log("5");
  useData();    
}

function useData() {
  console.log("6");
}
