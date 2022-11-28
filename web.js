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