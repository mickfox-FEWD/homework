// Building on exercise 3, use fetch() to load the products
// from https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json and
// display as a table

// 1. Create a new folder called exercise-4-product-table-using-fetch
// 2. Using the code for exercise 3 as a template create a “DataTable” class which accepts the
// products URL above as an argument
// 3. Display the data as a table
// 4. The images can be loaded from here ->
//      https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/images/
// 5. Test your code

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
    constructor(inURL) {
      console.log("constructor()" + inURL);
      // this.#data = data;
      const promise = this.#loadTableData(inURL);

      promise
        .then((data) => {
          console.log("promise.then: " + JSON.stringify(data));
          this.#data = data;
          this.render();
        })
        .catch(() => {
          console.error(`Could not get holidays: ${error}`);
        });

      console.log(
        "constructor: this.#data[1]: " + JSON.stringify(this.#data[1])
      );
    } // constructor

    render() {
      console.log("render() data: " + JSON.stringify(this.#data));

      this.#hols = this.#data;
      console.log("this.#hols[2]: " + JSON.stringify(this.#hols[2]));

      this.#outputHtml = `<div class="table-container"> 
    <h2>List of products</h2>`;

      console.log("this.outputHtml: " + this.#outputHtml);

      //{"name":"baked beans","price":0.4,"image":"beans.jpg","type":"vegetables"}
      this.#outputHtml += `<table class="blueTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>`;
      console.log("#outputHtml: " + this.#outputHtml);
      const imageLoc =
        "https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/images/";
      for (let i in this.#hols) {
        console.log(
          `i: ${i} this.#hols[i]: " + ${JSON.stringify(this.#hols[i])} `
        );
        this.#outputHtml += `<tr>
          <td> ${this.#hols[i].name} </td>
          <td> ${this.#hols[i].price} </td>
          <td> <img src="${imageLoc}${
          this.#hols[i].image
        }" alt="" border=3 height=100 width=100></img>
         </td>
          <td> ${this.#hols[i].type} </td>
          </tr>`;
      }
      this.#outputHtml += `</tbody></table></div>`;
      console.log(this.#outputHtml);
      this.#contentContainer.innerHTML = this.#outputHtml;
    }

    printError() {
      console.log("printError()");
      this.#contentContainer.innerHTML =
        "<h2>Error</h2><p>No public holidays to display.</p><p>" + err + "</p>";
    }

    // 3. Create a new async private method called “loadTableData” using the code on
    // slide 46 and load the table data from https://date.nager.at/api/v3/PublicHolidays/2024/IE

    // 4. To update the DOM, call the “render” method after the response is received.
    // Otherwise the “render” method will not wait for the response is received and so it
    // will display an empty table.

    async #loadTableData(inURL) {
      console.log("#loadTableData()" + inURL);
      try {
        console.log("try");
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await fetch(inURL);
        if (!response.ok) {
          console.log("!response.ok()");
          throw new Error(`HTTP error: ${response.status}`);
        }
        // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the parsed JSON object or throw an error
        console.log("response.ok");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(`Could not get table data: ${error}`);
      }
    }
  } //  class DataTable

  function init() {
    let inParam =
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json ";
    let data_table = new DataTable(inParam);
  } // function init

  // main
  window.addEventListener("load", (event) => {
    init();
  });
})();
