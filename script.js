function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://gateway.marvel.com//v1/public/characters?apikey=6ae880be7b37120c2896e366b41398b1");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
         cb(JSON.parse(this.responseText));
       }
    };
}
function printDataToConsole(data){
   console.log(data);
    
}
getData(printDataToConsole);



