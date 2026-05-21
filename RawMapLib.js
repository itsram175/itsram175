let ROUTES_ARRAY = sortRoutes(fetchAllRoutes());
let REG_ROUTES_ARRAY = fetchRegularRoutes();
let BUS_STOPS_ARRAY = fetchAllStops();

BUS_STOPS_ARRAY = BUS_STOPS_ARRAY.filter(stops => !(stops.toLowerCase().includes("secunderabad")));

BUS_STOPS_ARRAY.push("Secunderabad");

// Fast Stop Lookup Map (Improves Performance)
const StopMap = {};
for (let key in Stops) {
    StopMap[Stops[key].Stop_Name.toLowerCase()] = Stops[key];
}

// Fetch Regular Routes
function fetchRegularRoutes() {
    let routes = new Set();

    for (let route in RoutesData) {
        if (RoutesData[route].Route_Status == 'Regular') {
            routes.add(RoutesData[route].RouteNo);
        }
    }

    return Array.from(routes);
}

// Fetch Routes Passing Through a Stop
function fetchBusStop(stopName) {

    let routes = new Set();
    let stopObj = StopMap[stopName.toLowerCase()];
    if (!stopObj) return [];

    for (let key in stopObj) {
        if (typeof stopObj[key] === "object" && stopObj[key].NodeRoutes) {
            stopObj[key].NodeRoutes
                .split(",")
                .map(r => r.trim())
                .forEach(r => routes.add(r));
        }
    }

    return Array.from(routes).sort();
}

function fetchAlternateRoute2(from, to) {
    let routes = fetchFromTo(from, to);
    let exchangePoints = new Set();

    if (routes.length == 0) {
        let fromStopExRoutes = fetchStopProperty(from, InterChangeRoutes).split(", ");
        let toStopExRoutes = fetchStopProperty(to, InterChangeRoutes).split(", ");

        fromStopExRoutes.forEach(route => {
            let routeCourse = fetchRouteCourse(route, "UP");

            // if (routeCourse.length < 2) {
            //     routeCourse = fetchRouteCourse(route, DN);
            // }

            toStopExRoutes.forEach(routeTo => {
                let routeCourseTo = fetchRouteCourse(routeTo, "UP");
                let exPoints = routeCourse.filter(x => routeCourseTo.includes(x));

                exPoints.forEach(element => {
                    exchangePoints.add(element);
                });
            });
        });
    }

    return Array.from(exchangePoints);
}

function fetchAlternateRoute(from, to) {

    let routes = fetchFromTo(from, to);
    let bestPoint = null;
    let bestDistance = Infinity;

    if (routes.length == 0) {

        let fromRoutes = fetchStopProperty(from, InterChangeRoutes);
        let toRoutes = fetchStopProperty(to, InterChangeRoutes);

        if ((fromRoutes != null) && (toRoutes != null)) {

            fromRoutes = fromRoutes.split(", ");
            toRoutes = toRoutes.split(", ");

            fromRoutes.forEach(route => {

                let routeCourse = fetchRouteCourse(route, "UP");

                toRoutes.forEach(routeTo => {

                    let routeCourseTo = fetchRouteCourse(routeTo, "UP");

                    let exPoints = routeCourse.filter(x => routeCourseTo.includes(x));

                    exPoints.forEach(point => {

                        let d1 = Math.abs(routeCourse.indexOf(point) - routeCourse.indexOf(from));
                        let d2 = Math.abs(routeCourseTo.indexOf(point) - routeCourseTo.indexOf(to));

                        let totalDistance = d1 + d2;

                        if (totalDistance < bestDistance) {
                            bestDistance = totalDistance;
                            bestPoint = point;
                        }

                    });

                });

            });
        }

    }

    return bestPoint;
}



function addRouteCourse(routeNo, Direction, routeCourse) {

    if (!RoutesData[routeNo].RouteCourse) {
        RoutesData[routeNo].RouteCourse = {};
    }

    if (Direction == "UP") {
        RoutesData[routeNo].RouteCourse.UP = routeCourse;
    }
    else if (Direction == "DN") {
        RoutesData[routeNo].RouteCourse.DN = routeCourse;
    }
}


// Finalized
function fetchAllRoutes() {
    let routes = new Set();

    for (let route in RoutesData) {
        routes.add(RoutesData[route].RouteNo);
    }

    return Array.from(routes);
}

function fetchAllStops() {
    return Object.values(Stops)
        .map(s => s.Stop_Name)
        .sort();
}

function fetchRouteData(routeNo) {

    for (let key in RoutesData) {
        if (RoutesData[key].RouteNo === routeNo) {
            return {
                From: RoutesData[key].From,
                To: RoutesData[key].To,
                Note: RoutesData[key].Note,
                RouteDirection: RoutesData[key].RouteDirection,
                UP_Distance: RoutesData[key].UP_Distance,
                DN_Distance: RoutesData[key].DN_Distance,
            };
        }
    }

    return null;
}

function fetchRouteCourse(routeNo, direction = "UP") {

    let routeCourse = [];

    const routeData = fetchRouteData(routeNo);

    if (routeData.RouteCourse == undefined) {
        if (routeData.RouteDirection == REVERSE) {
            [routeData.From, routeData.To] = [routeData.To, routeData.From];
        }

        if (!routeData) return [];

        let currentStop =
            direction === "UP"
                ? routeData.From
                : routeData.To;

        routeCourse = [currentStop];
        let visited = new Set();

        while (true) {

            visited.add(currentStop);

            let stopObj = StopMap[currentStop.toLowerCase()];
            if (!stopObj) break;

            let nextStop = null;

            for (let key in stopObj) {

                if (!key.startsWith("Node")) continue;

                let node = stopObj[key];
                if (!node.NodeRoutes || !node.position) continue;

                let routes = node.NodeRoutes
                    .split(",")
                    .map(r => r.trim());

                if (
                    routes.includes(routeNo) &&
                    node.position === direction
                ) {
                    nextStop = node.NodeStop;
                    break;
                }
            }

            if (!nextStop || visited.has(nextStop)) break;

            routeCourse.push(nextStop);
            currentStop = nextStop;
        }
    } else {
        if (direction == UP) {
            routeCourse = routeData.routeCourse.UP;
        } else if (direction == DN) {
            routeCourse = routeData.routeCourse.UP;
        }
    }

    if (routeNo == "14PX" && direction == "UP") {
        routeCourse = routeCourse.concat(['Lalaguda', 'New Bridge', 'Mettuguda', 'Alugadda Bhavi', 'Sangeeth', SEC_BS]);
    }
    else if (routeNo == "16PX" && direction == "UP") {
        routeCourse = routeCourse.concat(['Lalaguda', 'New Bridge', 'Mettuguda', 'Alugadda Bhavi', 'Sangeeth', SEC_BS]);
    }

    return routeCourse;
}

function fetchStopProperty(stopname, property = undefined) {
    let stop = {};
    let propertyFetched = null;

    for (let key in Stops) {
        if (Stops[key].Stop_Name == stopname) {
            stop = Stops[key];
            break;
        }
    }

    if (property != undefined) {
        if (stop[property] != undefined) {
            propertyFetched = stop[property];
        } else {
            for (let key in stop) {
                if (stop[key].NodeStop == property) {
                    propertyFetched = stop[key];
                    break;
                }
            }
        }
    } else {
        propertyFetched = stop;
    }

    return propertyFetched;
}

function getStops(routeArray, from, to) {
    return routeArray.slice(routeArray.indexOf(from), routeArray.indexOf(to) + 1);
}

function getStopNodes(stopName) {

    // Fetch stop object from StopMap
    const stop = StopMap[stopName.toLowerCase()];

    // If stop not found
    if (!stop) return [];

    const nodes = [];

    // Loop through stop object
    for (let key in stop) {

        // Collect all Node objects
        if (key.startsWith("Node")) {
            nodes.push(stop[key]);
        }
    }

    return nodes;
}

function getCombinedNodes(stopName) {

    const stop = StopMap[stopName.toLowerCase()];

    if (!stop) return [];

    const groupedNodes = {};

    for (let key in stop) {

        if (key.startsWith("Node")) {

            const node = stop[key];

            // Combine ONLY based on landmark
            const groupKey = node.StopLandMark;

            // Create group if not exists
            if (!groupedNodes[groupKey]) {

                groupedNodes[groupKey] = {
                    StopLandMark: node.StopLandMark,

                    StopTowards: [],
                    position: [],
                    NodeStops: [],
                    NodeRoutes: []
                };
            }

            // Store all properties
            groupedNodes[groupKey].StopTowards.push(node.StopTowards);

            groupedNodes[groupKey].position.push(node.position);

            groupedNodes[groupKey].NodeStops.push(node.NodeStop);

            // Add routes
            const routes = node.NodeRoutes
                .split(",")
                .map(route => route.trim());

            groupedNodes[groupKey].NodeRoutes.push(...routes);
        }
    }

    // Remove duplicates
    const result = Object.values(groupedNodes).map(group => {

        group.StopTowards = [...new Set(group.StopTowards)];

        group.position = [...new Set(group.position)];

        group.NodeStops = [...new Set(group.NodeStops)];

        group.NodeRoutes = [...new Set(group.NodeRoutes)];

        return group;
    });

    return result;
}

function sortRoutes(routes) {

    return routes.sort((a, b) => {

        // Extract first number from route
        const getNumber = (route) => {
            const match = route.match(/\d+/);
            return match ? parseInt(match[0]) : Infinity;
        };

        const numA = getNumber(a);
        const numB = getNumber(b);

        // First sort by number
        if (numA !== numB) {
            return numA - numB;
        }

        // If same number, normal string compare
        return a.localeCompare(b);
    });
}

function fetchFromTo(from, to) {
    let fromRoutes = fetchBusStop(from);
    let toRoutes = fetchBusStop(to);
    let commonRoutes = fromRoutes.filter(x => toRoutes.includes(x));

    return commonRoutes;
}






// Developer Functions
function checkRoutesConsole(routes) {
    let routesArray = routes.split(", ");

    console.log("===== UP ROUTES =====");
    routesArray.forEach(route => {
        let routeArrays = [route];
        let routeData = fetchRouteData(route);
        let upRoute = fetchRouteCourse(route, UP);
        routeArrays = routeArrays.concat(upRoute);
        if (upRoute[0] == routeData.From && upRoute[upRoute.length - 1] == routeData.To) {
            routeArrays.push("COMPLETED")
        } else {
            routeArrays.push("PENDING")
        }
        console.log(routeArrays);
    });

    console.log("===== DOWN ROUTES =====");
    routesArray.forEach(route => {
        let routeArrays = [route];
        let routeData = fetchRouteData(route);
        let dnRoute = fetchRouteCourse(route, DN);
        routeArrays = routeArrays.concat(dnRoute);
        if (dnRoute[0] == routeData.To && dnRoute[dnRoute.length - 1] == routeData.From) {
            routeArrays.push("COMPLETED")
        } else {
            routeArrays.push("PENDING")
        }
        console.log(routeArrays);
    });
}

function returnSeriesRoutes(baseRoutes) {

    return ROUTES_ARRAY.filter(route => {

        return baseRoutes.some(baseRoute => {

            return new RegExp(`^${baseRoute}([A-Z]|\\/|$)`, "i")
                .test(route);
        });
    });
}

function removeElements(array, elementsToRemove) {

    return array.filter(item =>
        !elementsToRemove.includes(item)
    );
}
