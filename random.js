function FetchRandomRoutes(minLength, maxLength, count) {
    let filtered = REG_ROUTES_ARRAY.filter(route =>
        route.length >= minLength && route.length <= maxLength
    );

    filtered.sort(() => Math.random() - 0.5);

    return filtered.slice(0, count);
}

function fetchRandomStops(array, count) {
    array.sort(() => Math.random() - 0.5);

    return array.slice(0, count);
}

function fillRandomRoutes() {
    let LEN3_Elements = FetchRandomRoutes(1, 3, 5);
    let LEN6_Elements = FetchRandomRoutes(4, 6, 4);
    getId("listLEN3").innerHTML = "";
    getId("listLEN6").innerHTML = "";

    LEN3_Elements.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        li.setAttribute("onclick", "viewRouteData(this)");
        getId("listLEN3").appendChild(li);
    });

    LEN6_Elements.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        li.setAttribute("onclick", "viewRouteData(this)");
        getId("listLEN6").appendChild(li);
    });

    let inputPlaceHolder = `Search Routes (eg. ${LEN3_Elements[2]}, ${LEN3_Elements[4]})`;
    setAttributes('input1', 'placeholder', inputPlaceHolder)
}

function fillRandomFT() {
    let randomFT = fetchRandomFT(3, popularFT);
    getId("pplrSearch_FT_List").innerHTML = "";

    randomFT.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        li.setAttribute("onclick", "viewFromTo(this)");
        getId("pplrSearch_FT_List").appendChild(li);
    });
}

function fillRandomALT() {
    let randomFT = fetchRandomFT(3, popularALT);
    getId("pplrSearch_FT_List").innerHTML = "";

    randomFT.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        li.setAttribute("onclick", "viewFromTo(this)");
        getId("pplrSearch_FT_List").appendChild(li);
    });
}