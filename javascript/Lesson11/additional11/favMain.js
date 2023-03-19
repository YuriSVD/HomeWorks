let favoritesArray = JSON.parse(localStorage.getItem("favorites"));
for (const favorite of favoritesArray) {
    let div = document.createElement("div");
    div.style.marginBottom = "10px";
    for (const favoriteKey in favorite) {
        let divKey = document.createElement("div");
        divKey.append(`${favoriteKey} : ${favorite[favoriteKey]}`);
        div.appendChild(divKey);
    }
    document.body.appendChild(div);
}