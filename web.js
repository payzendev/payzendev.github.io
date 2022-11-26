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











let found =0;
const drinks = [{name: "Jack Daniels Black", price: 38.99, img:"JackDanielsBlack.png"},{name: "Lonehand Whiskey", price: 38.99},{name: "Jack Daniels Black", price: 38.99},{name: "Jack Daniels Single Barrel Rye Barrel Select", price: 38.99}
,{name: "Jack Daniels Gentlemen Jack", price: 38.99},{name: "Jack Daniels Single Barrel Tennessee Whiskey", price: 38.99},{name: "Jack Daniels Black with Collins Glass Gift", price: 38.99}
,{name: "Jack Daniels Black Jack Cola", price: 7.99}]
let q = /jack/i.test(drinks[0].name)
console.log(q)
for(i=0; i<drinks.length; i++){
    if(/jack/i.test(drinks[i].name)==true){
        found++
    }
}
console.log(found)