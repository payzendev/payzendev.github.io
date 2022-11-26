var searchbar=document.getElementById("search")
searchbar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchFor(e);
    }
});
function searchFor(e){
    document.location.href="search.html"
    const text = e.target.value;
    localStorage.setItem("searchQuery",text)
}

const search=localStorage.getItem("searchQuery")
document.getElementById("searchFor").innerHTML="Search for: \""+search+"\"";
const searchQ = new RegExp(search,'i');
/*list of drinks with name, price, image*/
const drinks = [{name: "Jack Daniels Black", price: 38.99},{name: "Lonehand Whiskey", price: 18.99},{name: "Jack Daniels Gray", price: 20.00},{name: "Jack Daniels Single Barrel Rye Barrel Select", price: 58.99}
,{name: "Jack Daniels Gentlemen Jack", price: 78.99},{name: "Jack Daniels Single Barrel Tennessee Whiskey", price: 22.99},{name: "Jack Daniels Black with Collins Glass Gift", price: 54.99}
,{name: "Jack Daniels Black Jack Cola", price: 7.99}]

let match =[];
let q =0

function matchDrinks(){
    for(i=0; i<drinks.length; i++){
        if(searchQ.test(drinks[i].name)==true){
           q++
           match.push(drinks[i])
        }
    }
}
let count =0;
function tableCreate(q){
    var tb = document.getElementById("menutd");
    var tbdy = document.createElement('tbody');
    for(let i=0; i<q/3; i++){
        var tr = document.createElement('tr');
        for (var j = 0; j < 3; j++) {
            var td = document.createElement('td');
            var img = document.createElement('img')
            img.src="images/JackDanielsBlack.png"
            td.appendChild(img)
            if(count<q)
            td.innerHTML="<img src='images/JackDanielsBlack.png' width=120px/><p>"+match[count].name+"</p> <p>$"+match[count].price.toFixed(2)+"</p>";
            else
            td.innerHTML="<img src='images/blank.png' width=120px/>";
            count++;
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tb.appendChild(tbdy);
}

matchDrinks()
if(q==0)
document.getElementById("searchFor").innerHTML="No results for: \""+search+"\"";
else
tableCreate(q);

console.log(q)
console.log(match)

 


