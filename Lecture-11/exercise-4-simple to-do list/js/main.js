// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  // globals
  const submit_button = document.querySelector(".submit");
  let currentDisplay = "0";
  let resultDisplay = false;

  function init() {
    console.log("init");

    const form = document.querySelector("#form");
    form.addEventListener("submit", (event) => {
      formReader(event, form);
    });

    function formReader(event, form) {
      event.preventDefault();
      let title = form.querySelector("#title").value;
      let description = form.querySelector("#description").value;
      let priority = form.querySelector("#priority").value;
      console.log(
        `title: ${title}, description: ${description}, priority: ${priority}`
      );

      document.querySelector(
        "#todolist"
      ).innerHTML += `<tr><td>${title}</td><td>${description}</td><td>${priority}</td></tr>`;
    }

    // const form = document.querySelector("#form");
    // console.log("form: " + form.value);

    // form.addEventListener("submit", (event) => {
    //   event.preventDefault();
    //   let formData = form.value;
    //   console.log("formData is: " + formData);
    // });

    // window.addEventListener("load", (event) => {

    //     submit_button.addEventListener("click", (event) => {
    //     console.log("submit event: " + event.target.textContent);
    //     if (event.target.tagName.toLowerCase() === "button") {
    //       switch (event.target.textContent) {
    //         case "CE":
    //           clearLastElement();
    //           break;
    //         case "C":
    //           clearDisplay();
    //           break;
    //         case "=":
    //           calculateResult();
    //           break;
    //         default:
    //           // pass value of the clicked button to appendToDisplay()
    //           appendToDisplay(event.target.textContent);
    //       }
    //     }
    //   });
    // });

    function readInput() {}
  }

  init();
})();
