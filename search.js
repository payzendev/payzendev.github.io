
var div = document.createElement('div');
div.innerHTML = "Search for: \""+localStorage.getItem("searchQuery")+"\"";
div.setAttribute('class', 'searchFor'); 
document.body.appendChild(div);