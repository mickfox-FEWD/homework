// see https://medium.com/@rameshsainom/javascripts-dom-mutation-and-promises-advance-javascript-95da5258297c for more details on updating the DOM and promises
//

class DataTable {
    // properties
    #data;
    #contentContainer;

    constructor() {
        this.#contentContainer = document.getElementById("content");
        this.loadHolidayData(); // load data using fetch and build the table
    }

    render(){
        let hols = this.#data;
        let outputHtml = `<div class="table-container">
            <h2>List of Public Holidays in Ireland for 2024</h2>
                <table class="blueTable">
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

        for (let i in hols) {
            outputHtml += `<tr>
                <td>${ hols[i].date }</td>
                <td>${ hols[i].localName }</td>
                <td>${ hols[i].name }</td>
                <td>${ hols[i].countryCode }</td>
                <td>${ hols[i].types }</td>
            </tr>`;
        }
        outputHtml += `     </tbody>
            </table>
        </div>`;

        this.#contentContainer.innerHTML = outputHtml;
    }

    async loadHolidayData(){ 
        try{
            //after this line, our function will wait for the `fetch()` call to be settled
            //the `fetch()` call will either return a Response or throw an error 
            const response = await fetch(
                "https://date.nager.at/api/v3/PublicHolidays/2024/IE",
            );
            if(!response.ok){
            throw new Error(`HTTPerror:${response.status}`);
            }
            //after this line, our function will wait for the`response.json()`call to be settled
            //the`response.json()`call will either return the parsed JSON object or throw an error 
            this.#data=await response.json();
            console.log(this.#data[0].name);
            this.render(); // update the DOM
        } catch(error){
            console.error(`Could not get holidays:${error}`);
        }

    }

}

function init() {
    try {
        const dataTable = new DataTable();
        dataTable.render(); // render table
    } catch(err) {
        console.error(err);
        contentContainer.innerHTML = '<h2>Error</h2><p>No public holidays to display.</p><p>' + err + '</p>';
    }
}

window.addEventListener("load", (event => {
    init();
}));

