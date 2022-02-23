var string = document.lastModified;

let nLastModif = Date.parse(document.lastModified);

document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
document.getElementById('lastUpdated').appendChild(document.createElement("center")).innerText = "Last Updated: " + document.lastModified

