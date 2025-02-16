// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  const calcButtons = document.querySelector(".calculator .calculator-buttons");
  let currentDisplay = "0";
  let resultDisplay = false;

  function appendToDisplay(value) {
    console.log("appendToDisplay: " + value);
    if (value != "Shift") {
      console.log("not shift");

      if (currentDisplay === "0" || resultDisplay) {
        currentDisplay = value;
      } else {
        currentDisplay += value;
      }
      resultDisplay = false;
      updateDisplay();
    }
  }

  function updateDisplay() {
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
  }

  function calculateResult() {
    try {
      // execute the currentDisplay string as JS code (recommended). Alternative: eval()
      const result = Function("return " + currentDisplay)();
      currentDisplay += `\n${result.toString()}`;
      updateDisplay();
    } catch (error) {
      currentDisplay += "\nError";
      updateDisplay();
    }
    resultDisplay = true;
  }

  function clearLastElement() {
    currentDisplay = currentDisplay.slice(0, -1);
    if (currentDisplay === "") {
      currentDisplay = "0";
    }
    updateDisplay();
  }

  function clearDisplay() {
    currentDisplay = "0";
    updateDisplay();
  }

  function init() {
    console.log("init");

    window.addEventListener("load", (event) => {
      calcButtons.addEventListener("click", (event) => {
        console.log("click event: " + event.target.textContent);
        if (event.target.tagName.toLowerCase() === "button") {
          switch (event.target.textContent) {
            case "CE":
              clearLastElement();
              break;
            case "C":
              clearDisplay();
              break;
            case "=":
              calculateResult();
              break;
            default:
              // pass value of the clicked button to appendToDisplay()
              appendToDisplay(event.target.textContent);
          }
        }
      });
    });

    window.addEventListener("keydown", function (event) {
      // console.log("Key pressed:", event.key + "type " + typeof event.key);
      let modKey = event.key;
      // if (event.shiftKey) {
      //   if (event.key == "=") {
      //     modKey = "+";
      //   } else if (event.key == "8") {
      //     modKey = "*";
      //   }
      // }
      switch (modKey) {
        case "Backspace":
          clearLastElement();
          break;
        case "c":
          clearDisplay();
          break;
        case "=":
          calculateResult();
          break;
        case "Enter":
          calculateResult();
          break;
        // case "+":
        //   break;

        // case "*":
        //   break;

        default:
          // pass value of the clicked button to appendToDisplay()
          // if (!event.shiftKey) {
          appendToDisplay(modKey);
        // }
      }
    });
  }

  init();
})();
