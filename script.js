const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           
         cb(JSON.parse(this.responseText));
       }
    };
} 
function getTableHeaders(obj){
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    //to clear items and to stop apeending data to list
    var element = document.getElementById("data");
    element.innerHTML =""; //element. inner html is now a blank string to clear old html
        //data from cb is coming to this data and data from type is going to xhr.open()
    getData(type, function(data){
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);
        data.forEach(function(item){
           
           // element.innerHTML += `<p> ${item.name} </p>`;
        });

            element.innerHTML = `<table>${tableHeaders}</table>`;
        

    });
}

