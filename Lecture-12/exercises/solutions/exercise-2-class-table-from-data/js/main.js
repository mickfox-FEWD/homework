class DataTable {
    // properties
    data;
    contentContainer;

    constructor(data) {
        this.data = data;
        this.contentContainer = document.getElementById("content");
    }

    render(publicHolidays){
        let hols = this.data;
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

        this.contentContainer.innerHTML = outputHtml;
    }

}

function init() {
    try {
        // load data as a JS object
        console.log(data);
        const dataTable = new DataTable(data);
        dataTable.render(); // render table
    } catch(err) {
        console.error(err);
        contentContainer.innerHTML = '<h2>Error</h2><p>No public holidays to display.</p><p>' + err + '</p>';
    }
}

window.addEventListener("load", (event => {
    init();
}));

