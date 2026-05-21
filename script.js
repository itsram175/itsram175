const colorsArray = ['blue', 'green', 'blue', 'green', 'blue'];
const features = Object.freeze({
    BUS_ROUTES: 1,
    BUS_STOPS: 2,
    FROM_TO: 3,
    FARES: 4,
});

const SINGLE_SB = "SINGLE_SB";
const DOUBLE_SB = "DOUBLE_SB";

let SUGGESSIONS_ARRAY = ROUTES_ARRAY;
let CURRENT_FEATURE = features.BUS_ROUTES;

let currentRouteNo = 0;
let currentBusStop = null;
let currentDirection = UP;

function navigation(ref) {
    CURRENT_FEATURE = ref.value;
    setValue('input1', '');
    setValue('input2', '');

    let navBarChildren = getChildrens('navBar');

    for (let i = 0; i < navBarChildren.length; i++) {
        navBarChildren[i].classList.remove('active');
    }

    ref.classList.add('active');

    hide('popularRoutes');
    hide('newRestoreRoutes');
    hide('popularBusStops');

    switch (CURRENT_FEATURE) {
        case features.BUS_ROUTES:
            SUGGESSIONS_ARRAY = ROUTES_ARRAY;
            show('popularRoutes');
            show('newRestoreRoutes');
            show('homeOutputAttractions');
            showSearchBarSetup(SINGLE_SB);
            fillRandomRoutes();
            break;

        case features.BUS_STOPS:
            SUGGESSIONS_ARRAY = BUS_STOPS_ARRAY;
            show('popularBusStops');
            show('homeOutputAttractions');
            showSearchBarSetup(SINGLE_SB);
            setAttributes('input1', 'placeholder', 'Search Bus Stop..');
            break;

        case features.FROM_TO:
            SUGGESSIONS_ARRAY = BUS_STOPS_ARRAY;
            showSearchBarSetup(DOUBLE_SB);
            hide('homeOutputAttractions');
            setAttributes('input1', 'placeholder', 'Travelling from..');
            setAttributes('input2', 'placeholder', 'Travelling to..');
            break;

        case features.FARES:
            SUGGESSIONS_ARRAY = BUS_STOPS_ARRAY;
            showSearchBarSetup(DOUBLE_SB);
            hide('homeOutputAttractions');
            setAttributes('input1', 'placeholder', 'Travelling from..');
            setAttributes('input2', 'placeholder', 'Travelling to..');
            break;

        default:
            // No Action
            break;
    }
}

function removeActiveNav() {
    let navBar = getId('navBar');

    for (let i = 0; i < navBar.children.length; i++) {
        navBar.children[i].classList.remove('active');
    }
}

function showSearchBarSetup(mode) {
    hide("searchBar1");
    hide("searchBar2");
    hide("SearchButton");
    hide("SearchBarsLine");

    if (mode == SINGLE_SB) {
        show("searchBar1");
    }
    else if (mode == DOUBLE_SB) {
        show("searchBar1");
        show("searchBar2");
        show("SearchButton");
        show("SearchBarsLine");
    }
}

function openMenu() {
    open('sideMenu');
}

function closeMenu() {
    close('sideMenu');
}

function showSuggessions(ref) {
    let inputValue = ref.value;
    clearElement('suggessionsList');

    if (inputValue != "") {
        if (ref.id == "input1") {
            getId('input1Clear').classList.remove('invisible');
        } else if (ref.id == "input2") {
            getId('input2Clear').classList.remove('invisible');
        }
    } else {
        if (ref.id == "input1") {
            getId('input1Clear').classList.add('invisible');
        } else if (ref.id == "input2") {
            getId('input2Clear').classList.add('invisible');
        }
    }

    SUGGESSIONS_ARRAY.forEach(element => {
        if (element.toLowerCase().startsWith(inputValue.toLowerCase())) {
            let li = document.createElement("li");
            li.innerHTML = element;

            switch (CURRENT_FEATURE) {
                case features.BUS_ROUTES:
                    li.setAttribute("onclick", "viewRouteData(this)");
                    break;

                case features.BUS_STOPS:
                    li.setAttribute("onclick", "viewBusStopData(this)");
                    break;

                case features.FROM_TO:
                    li.setAttribute("onclick", `selectValuefromList(this,${ref.id})`);
                    break;

                default:
                    // No Action
                    break;
            }

            getId('suggessionsList').appendChild(li);
        }
    });

    if (getChildrens('suggessionsList').length > 0) {
        show('suggessionsList');
    } else {
        hide('suggessionsList');
    }
}

function clearInputsIcon(ref) {
    if (ref.id == "input1Clear") {
        setValue("input1", "");
    } else if (ref.id == "input2Clear") {
        setValue("input2", "");
    }

    ref.classList.add("invisible");
}

function viewRouteData(ref) {
    currentRouteNo = ref.innerHTML;
    currentDirection = UP;

    let routeData = fetchRouteData(currentRouteNo);
    let routeCourse = fetchRouteCourse(currentRouteNo, currentDirection);

    if ((routeData.From).includes('Secunderabad')) {
        routeData.From = 'Secunderabad';
    }

    if ((routeData.To).includes('Secunderabad')) {
        routeData.To = 'Secunderabad';
    }

    let routeDescription = `<strong>${currentRouteNo}</strong> operates between <strong>${routeData.From}</strong> and <strong>${routeData.To}</strong> by covering ${routeData.UP_Distance} KMs. It passes through various intermediate bus stops along the route.`;

    setValue('input1', currentRouteNo);
    setAttributes('routecourseInput', 'placeholder', `Search Stops in ${currentRouteNo}...`);

    setText('routeDescription', routeDescription);
    setText('reverseBtnTxt', 'Down Trip Route');
    buildRouteCourse(routeCourse);

    open('routeCourseOutput');
    hide('homePage');
    show('bottomImage');

}

function reverseRouteCourse() {
    let routeCourse = [];
    let routeData = fetchRouteData(currentRouteNo);

    if ((routeData.From).includes('Secunderabad')) {
        routeData.From = 'Secunderabad';
    }

    if ((routeData.To).includes('Secunderabad')) {
        routeData.To = 'Secunderabad';
    }

    let routeDescription = "";

    if (currentDirection == UP) {
        currentDirection = DN;
        setText('reverseBtnTxt', 'Up Trip Route');
        routeCourse = fetchRouteCourse(currentRouteNo, currentDirection);

        routeDescription = `<strong>${currentRouteNo}</strong> operates between <strong>${routeData.To}</strong> and <strong>${routeData.From}</strong> by covering ${routeData.UP_Distance} KMs. It passes through various intermediate bus stops along the route.`;
    } else if (currentDirection == DN) {
        currentDirection = UP;
        setText('reverseBtnTxt', 'Down Trip Route');
        routeCourse = fetchRouteCourse(currentRouteNo, currentDirection);

        routeDescription = `<strong>${currentRouteNo}</strong> operates between <strong>${routeData.From}</strong> and <strong>${routeData.To}</strong> by covering ${routeData.DN_Distance} KMs. It passes through various intermediate bus stops along the route.`;
    }

    setText('routeDescription', routeDescription);
    buildRouteCourse(routeCourse);
}

function buildRouteCourse(routeCourse) {
    clearElement('routeCourseContainer');
    if (routeCourse.length > 1) {
        show('reverseRouteBtn');
        for (let i = 0; i < routeCourse.length; i++) {
            let routeCourseItem = null;
            let stopName = null;
            let subStopName = null;

            switch (routeCourse[i]) {
                case SEC_BS:
                    stopName = 'Secunderabad';
                    subStopName = 'Blue Sea Hotel Stop';
                    break;

                case SEC_RTF:
                    stopName = 'Secunderabad';
                    subStopName = 'Rethifile Bus Station';
                    break;

                case SEC_CS:
                    stopName = 'Secunderabad';
                    subStopName = 'Chilkalguda X Roads';
                    break;

                case SEC_ALF:
                    stopName = 'Secunderabad';
                    subStopName = 'Alpha Hotel Bus Stop';
                    break;

                case SEC_GRD:
                    stopName = 'Secunderabad';
                    subStopName = 'Gurudwara Bus Stop';
                    break;

                case SEC_ORTF:
                    stopName = 'Secunderabad';
                    subStopName = 'Opp. Rethifile Bus Station';
                    break;

                default:
                    stopName = routeCourse[i];
                    subStopName = "";
                    break;
            }

            if (i == 0) {
                routeCourseItem = createRouteCourseItem('first', stopName, subStopName);
            } else if (i == routeCourse.length - 1) {
                routeCourseItem = createRouteCourseItem('last', stopName, subStopName);
            } else {
                routeCourseItem = createRouteCourseItem('', stopName, subStopName);
            }

            routeCourseContainer.appendChild(routeCourseItem);
        }
    } else {
        getId('routeCourseContainer').innerHTML = `<div class="routeNotAdded br10px centerCol" id="routeNotAdded">
                        <p>We're Working on adding this Route. <br> Please Try Later.</p>
                    </div>`;

        hide('reverseRouteBtn');
    }

    getId('routeCourseOutputContent').scrollTop = 0;
}

function createRouteCourseItem(itemIndex, stopName, SubStopName = "") {
    let routeCourseItem = document.createElement('div');
    let graphic = document.createElement('div');
    let text = document.createElement('div');

    let topLine = document.createElement('span');
    let circle = document.createElement('span');
    let BottomLine = document.createElement('span');

    let RC_stopName = document.createElement('p');
    let RC_subStopName = document.createElement('p');

    routeCourseItem.classList.add('routeCourseItem');
    routeCourseItem.classList.add('centerRow');
    routeCourseItem.classList.add('spBetween');

    if (itemIndex == 'first') {
        routeCourseItem.classList.add('first');
    } else if (itemIndex == 'last') {
        routeCourseItem.classList.add('last');
    }

    graphic.classList.add('graphic');
    graphic.classList.add('centerCol');

    topLine.classList.add('line');
    topLine.classList.add('topLine');

    circle.classList.add('circle');
    circle.classList.add('centerCol');

    BottomLine.classList.add('line');
    BottomLine.classList.add('BottomLine');

    text.classList.add('text');
    RC_stopName.classList.add('RC_stopName');
    RC_subStopName.classList.add('RC_subStopName');

    RC_stopName.innerHTML = stopName;
    RC_subStopName.innerHTML = SubStopName;

    graphic.appendChild(topLine);
    graphic.appendChild(circle);
    graphic.appendChild(BottomLine);

    text.appendChild(RC_stopName);
    text.appendChild(RC_subStopName);

    routeCourseItem.appendChild(graphic);
    routeCourseItem.appendChild(text);

    return routeCourseItem;
}

function viewBusStopData(ref) {
    currentBusStop = ref.innerHTML;

    let color = 'blue';
    let stopDescription, stopNodes;

    if (currentBusStop == "Secunderabad") {
        stopDescription = "<strong>Secunderabad</strong> is a major transportation and commercial area in Hyderabad with multiple city bus stops located around the Secunderabad Railway Station and nearby junctions.";
        stopNodes = getCombinedNodes(SEC_ALF).concat(getCombinedNodes(SEC_GRD), getCombinedNodes(SEC_RTF), getCombinedNodes(SEC_BS), getCombinedNodes(SEC_CS), getCombinedNodes(SEC_ORTF));
        console.log(stopNodes);
    } else {
        stopDescription = fetchStopProperty(currentBusStop, 'stopDescription');
        stopNodes = getCombinedNodes(currentBusStop);
    }

    setValue('input1', currentBusStop);

    if (currentBusStop == JBS) {
        setAttributes('busStopsInput', 'placeholder', `Search Routes at ${"J.B.S"}`);
    } else {
        setAttributes('busStopsInput', 'placeholder', `Search Routes at ${currentBusStop}`);
    }



    setText('busStopDescription', stopDescription);

    clearElement('busStopNodesContainer');

    for (let i = 0; i < stopNodes.length; i++) {
        if (stopNodes[i].StopLandMark != "hide") {
            let BusStopInfoItem = createBusStopInfoItem(color, stopNodes[i].StopTowards, stopNodes[i].StopLandMark, (sortRoutes(stopNodes[i].NodeRoutes)));

            getId('busStopNodesContainer').appendChild(BusStopInfoItem);

            if (color == 'blue') {
                color = 'green'
            } else if (color == 'green') {
                color = 'blue';
            }
        }
    }

    open('busStopOutput');
    hide('homePage');
    show('bottomImage');
}

function createBusStopInfoItem(color, stopTowards, StopLandMark, routesArray) {
    let BusStopInfoItem = document.createElement("div");
    let headLine = document.createElement("div");
    let icon = document.createElement("div");
    let svgContainer = document.createElement("div");
    let text = document.createElement("div");
    let busStopRoutes = document.createElement("div");

    let busStopTowards = document.createElement('p');
    let busStopLandMark = document.createElement('p');

    let hr = document.createElement("hr");

    BusStopInfoItem.classList.add('BusStopInfoItem');
    BusStopInfoItem.classList.add('centerCol');
    BusStopInfoItem.classList.add('br10px');
    BusStopInfoItem.classList.add(color);

    headLine.classList.add('headLine');
    headLine.classList.add('centerRow');

    icon.classList.add('icon');
    icon.classList.add('centerRow');

    svgContainer.classList.add('svgContainer');
    svgContainer.classList.add('centerRow');
    svgContainer.classList.add('boxShadow');

    text.classList.add('text');

    busStopRoutes.classList.add('busStopRoutes');
    busStopRoutes.classList.add('centerRow');

    busStopTowards.classList.add('busStopTowards');
    busStopLandMark.classList.add('busStopLandMark');

    svgContainer.innerHTML = '<svg fill="#000000" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"> </g> <g id="SVGRepo_iconCarrier"> <path d="M12 0C5.4375 0 3 2.167969 3 8L3 41C3 42.359375 3.398438 43.339844 4 44.0625L4 47C4 48.652344 5.347656 50 7 50L11 50C12.652344 50 14 48.652344 14 47L14 46L36 46L36 47C36 48.652344 37.347656 50 39 50L43 50C44.652344 50 46 48.652344 46 47L46 44.0625C46.601563 43.339844 47 42.359375 47 41L47 9C47 4.644531 46.460938 0 40 0 Z M 15 4L36 4C36.554688 4 37 4.449219 37 5L37 7C37 7.550781 36.554688 8 36 8L15 8C14.449219 8 14 7.550781 14 7L14 5C14 4.449219 14.449219 4 15 4 Z M 11 11L39 11C41 11 42 12 42 14L42 26C42 28 40.046875 28.9375 39 28.9375L11 29C9 29 8 28 8 26L8 14C8 12 9 11 11 11 Z M 2 12C0.898438 12 0 12.898438 0 14L0 22C0 23.101563 0.898438 24 2 24 Z M 48 12L48 24C49.105469 24 50 23.101563 50 22L50 14C50 12.898438 49.105469 12 48 12 Z M 11.5 34C13.433594 34 15 35.566406 15 37.5C15 39.433594 13.433594 41 11.5 41C9.566406 41 8 39.433594 8 37.5C8 35.566406 9.566406 34 11.5 34 Z M 38.5 34C40.433594 34 42 35.566406 42 37.5C42 39.433594 40.433594 41 38.5 41C36.566406 41 35 39.433594 35 37.5C35 35.566406 36.566406 34 38.5 34Z"> </path> </g> </svg >';

    routesArray.forEach(route => {
        let routeContainer = document.createElement("li");
        routeContainer.innerHTML = route;
        busStopRoutes.appendChild(routeContainer);
    });

    if (stopTowards.length > 1) {
        stopTowards = stopTowards[0]
    }

    busStopTowards.innerHTML = StopLandMark;
    busStopLandMark.innerHTML = "Towards " + stopTowards;

    text.appendChild(busStopTowards);
    text.appendChild(busStopLandMark);

    icon.appendChild(svgContainer);
    headLine.appendChild(icon);
    headLine.appendChild(text);

    BusStopInfoItem.appendChild(headLine);
    BusStopInfoItem.appendChild(hr);
    BusStopInfoItem.appendChild(busStopRoutes);

    return BusStopInfoItem;
}

function search() {
    let input1 = getValue("input1");
    let input2 = getValue("input2");

    if (input1 != "" && input2 != "") {
        switch (CURRENT_FEATURE) {
            case features.FROM_TO:
                let allRoutes = fetchFromTo(input1, input2);
                let RegCount = 0;
                let RareCount = 0;
                clearElement('fromToRegRoutesContainer');
                clearElement('fromToRareRoutesContainer');

                allRoutes.forEach(route => {
                    let routeHolder = document.createElement("li");
                    routeHolder.innerHTML = route;

                    if (REG_ROUTES_ARRAY.includes(route)) {
                        RegCount++;
                        getId('fromToRegRoutesContainer').appendChild(routeHolder);
                    } else {
                        RareCount++;
                        getId('fromToRareRoutesContainer').appendChild(routeHolder);
                    }
                });

                if (RareCount == 0) {
                    hide('fromToRareRoutesItem');
                }

                if (RegCount > 0) {
                    getId('fromToDesc').innerHTML = `There are many buses are being operated betweem <strong>${input1}</strong> and <strong>${input2}</strong> with good No. of. Services.`;
                } else if (RegCount > 3) {
                    getId('fromToDesc').innerHTML = `There are many buses are being operated betweem <strong>${input1}</strong> and <strong>${input2}</strong> with good No. of. Services.`;
                }

                if (allRoutes.length > 0) {
                    open('fromToOutput');
                    hide('homePage');
                    show('bottomImage');
                }
                break;

            case features.FARES:

                break;

            default:
                break;
        }



    }

}

function selectValuefromList(ref, inputId) {
    inputId.value = ref.innerHTML;
}

function goBack() {
    close('routeCourseOutput');
    close('busStopOutput');
    close('fromToOutput');
    show('homePage');
    hide('bottomImage');
}

fillRandomRoutes();

// checkRoutesConsole("8A, 8A/70, 8A/75R, 8A/85, 8A/178G, 8A/251, 8A/252S, 8A/253, 8A/253M, 8A/532, 8A/539, 8AK, 8C, 8C/85P, 8M, 8R, 8UA");

// checkRoutesConsole("8/37, 8C/229");

// checkRoutesConsole("5G, 5K, 5KM, 5K/92A, 5K/92R, 5K/120K, 5K/125, 5K/188, 5K/251, 5M, 5W, 92K");

// checkRoutesConsole("5/5R, 5K/16A, 5K/16AD, 5K/16C, 5K/16CD, 5K/16D, 5K/25S, 5K/229, 5R");

// checkRoutesConsole("9A, 9F, 9K, 9K/230P, 9K/272G, 9X, 9X/41C, 9X/230P, 9X/272G, 9X/283D, 9XM, 9XM/230P, 9YF, 9YF/11W");

// checkRoutesConsole("9K/102");

checkRoutesConsole("10, 10F, 10FV, 10H, 10H/220K, 10HA, 10HL, 10HP, 10HW, 10J, 10K, 10KG, 10KJ, 10KL, 10KM, 10KM/224G, 10W, 10X, 10Y, 10YF");

// checkRoutesConsole("11W");

// checkRoutesConsole("16A, 16A/281R, 16AC, 16AK, 16C, 16C/281, 16CR, 16CD, 16D, 16D/24B, 16H, 16NY, 16P, 16PX");

// checkRoutesConsole("15H/20, 15D/20, 16/20, 16A/5K, 16A/10H, 16A/20, 16A/47L, 16A/47W, 16A/49M, 16A/219, 16AD/5K, 16AB/5K, 16C/5K, 16C/10H, 16C/38T, 16C/47L, 16C/49M, 16C/219, 16CR/38T, 16CD/5K, 16CD/49M, 16D/5K, 16D/49M, 16ES, 16H/47L, 16H/49M, 16R/20, 16S/10YF");

// checkRoutesConsole("219, 219I, 219P");