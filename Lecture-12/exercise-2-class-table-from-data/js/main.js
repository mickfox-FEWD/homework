// code is wrapped in an IIFE (Immediately Invoked Function Expression). See https://developer.mozilla.org/en-US/docs/Glossary/IIFE for more details
//
(() => {
  class DataTable {
    //Create private properties for any global variables in original. Use the same names
    #contentContainer = document.getElementById("content");
    #data = "";
    #hols = "";
    #outputHtml = "";

    //The Constructor has an argument called “data” which takes an object and save it
    // as a private property called “data”
    constructor(data) {
      this.#data = data;
      console.log(
        "constructor: this.#data[1]: " + JSON.stringify(this.#data[1])
      );

      // try {
      //   // load data as a JS object
      //   console.log("data is: " + data);
      //   //Refactor the existing “init” function to create a new DataTable object and call the “render” function
      //   let data_table = new DataTable(data);
      //   data_table.render();

      //   //render(); // render table // renamed to render and removed parameter
      // } catch (err) {
      //   console.error(err);
      //   data_table.printError();
      // }
    } // constructor
    //Copy the renderTable code and rename it to “render”. The “render” function has no arguments.
    render() {
      //Refactor (modify) the render function code to use the new “data” property
      this.#hols = this.#data;
      console.log("this.#hols[1]: " + JSON.stringify(this.#hols[1]));

      this.#outputHtml = `<div class="table-container"> 
    <h2>List of Public Holidays in Ireland for 2024</h2>`;

      console.log("this.outputHtml: " + this.#outputHtml);

      this.#outputHtml += `<table class="blueTable">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name (in Irish)</th>
          <th>Name</th>
          <th>Country Code</th>
          <th>Types</th>
        </tr>
      </thead>
      <tbody>`;
      console.log("#outputHtml: " + this.#outputHtml);

      for (let i in this.#hols) {
        console.log(
          `i: ${i} this.#hols[i]: " + ${JSON.stringify(this.#hols[i])} `
        );
        this.#outputHtml += `<tr>
          <td> ${this.#hols[i].date} </td>
          <td> ${this.#hols[i].localName} </td>
          <td> ${this.#hols[i].name} </td>
          <td> ${this.#hols[i].countryCode} </td>
          <td> ${this.#hols[i].types} </td>
          </tr>`;
      }
      this.#outputHtml += `</tbody></table></div>`;
      console.log(this.#outputHtml);
      this.#contentContainer.innerHTML = this.#outputHtml;
    }

    printError() {
      this.#contentContainer.innerHTML =
        "<h2>Error</h2><p>No public holidays to display.</p><p>" + err + "</p>";
    }
  } //  class DataTable

  function init() {
    console.log("data[1]: " + JSON.stringify(data)[1]);
    let data_table = new DataTable(data);
    data_table.render();
  } // function init

  // main
  window.addEventListener("load", (event) => {
    init();
  });
})();
