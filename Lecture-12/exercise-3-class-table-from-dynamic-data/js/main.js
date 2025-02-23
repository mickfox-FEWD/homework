// 1. Create a new folder called exercise-3-class-table-from-dynamic-data
// 2. Copy the code  from exercise-2-class-table-from-data
// 3. Create a new async private method called “loadHolidayData” using the code on
// slide 46 and load the table data from https://date.nager.at/api/v3/PublicHolidays/2024/IE

// 4. To update the DOM, call the “render” method after the response is received.
// Otherwise the “render” method will not wait for the response is received and so it
// will display an empty table.

// 5. In the Contructor, call the “loadHolidayData” method
// 6. Test your code. It should function as before

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
    constructor() {
      console.log("constructor()");
      // this.#data = data;
      const promise = this.#loadHolidayData();

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
      console.log("printError()");
      this.#contentContainer.innerHTML =
        "<h2>Error</h2><p>No public holidays to display.</p><p>" + err + "</p>";
    }

    // 3. Create a new async private method called “loadHolidayData” using the code on
    // slide 46 and load the table data from https://date.nager.at/api/v3/PublicHolidays/2024/IE

    // 4. To update the DOM, call the “render” method after the response is received.
    // Otherwise the “render” method will not wait for the response is received and so it
    // will display an empty table.

    async #loadHolidayData() {
      console.log("#loadHolidayData()");
      try {
        console.log("try");
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await fetch(
          "https://date.nager.at/api/v3/PublicHolidays/2024/IE"
        );
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
        console.error(`Could not get products: ${error}`);
      }
    }
  } //  class DataTable

  function init() {
    console.log("init(): data[1]: " + JSON.stringify(data)[1]);
    let data_table = new DataTable();
    //data_table.render();
  } // function init

  // main
  window.addEventListener("load", (event) => {
    init();
  });
})();
