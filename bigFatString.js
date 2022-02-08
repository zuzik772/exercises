document.getElementById("btn").addEventListener("click", start);
function start() {
  let input = document.getElementById("input").value.trim();
  let operation =
    document.getElementById("choice").options[choice.selectedIndex].id;
  let output = document.getElementById("output");
  switch (operation) {
    case "0":
      output.textContent =
        input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
      console.log("0");
      break;
    case "1":
      output.textContent = input.substring(input, input.indexOf(" "));
      console.log("1");
      break;
    case "2":
      output.textContent = input.substring(input, input.indexOf(" ")).length;
      console.log("2");
      break;
    case "3":
      output.textContent =
        "start position: " +
        (input.indexOf(" ") + 1) +
        " end position: " +
        (input.lastIndexOf(" ") - 1) +
        " " +
        input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "));
      console.log("3");
      break;
    case "4":
      if (input.endsWith(".jpg")) {
        output.textContent = ".jpg";
      } else if (input.endsWith(".png")) output.textContent = ".png";
      break;
    case "5":
      if (input === "password") {
        output.textContent = input.replace(input, "*".repeat(input.length));
      }
      console.log("5");
      break;
    case "6":
      output.textContent =
        input.substring(0, 2).toLowerCase() +
        input.charAt(2).toUpperCase() +
        input.substring(3).toLowerCase();
      console.log("6");
      break;
    case "7":
      // it works only for 1 space or 1 hyphen!!!
      if (input.match(" ")) {
        output.textContent =
          input.substring(0, input.indexOf(" ") + 1).toLowerCase() +
          input.charAt(input.indexOf(" ") + 1).toUpperCase() +
          input.substring(input.indexOf(" ") + 2).toLowerCase();
      }
      if (input.match("-")) {
        console.log("it works");
        output.textContent =
          input.substring(0, input.indexOf("-") + 1).toLowerCase() +
          input.charAt(input.indexOf("-") + 1).toUpperCase() +
          input.substring(input.indexOf("-") + 2).toLowerCase();
      }
      console.log("7");

      if (x) {
      }
      break;

    // case "7":
    //   console.log("7");
    //   input.split("").map((char, i, arr) => {
    //     console.log("I", arr[i]);
    //     if (" -".includes(arr[i - 1])) {
    //       return char.toUpperCase();
    //     } else {
    //       return char;
    //     }
    //   });
    //   break;
  }
}
