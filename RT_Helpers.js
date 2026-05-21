// Variables
const ALL = "ALL";

// Functions
function print(text) {
    console.log(text);
}

function getId(element) {
    return document.getElementById(element);
}

function hide(element) {
    getId(element).classList.add('hide');
}

function show(element) {
    getId(element).classList.remove('hide');
}

function showChildren(childrenArray, childIndex) {
    let children = getId(childrenArray).children;

    if (childIndex == ALL) {
        for (let i = 0; i < children.length; i++) {
            children[i].classList.remove('hide');
        }
    } else {
        childIndex.forEach(item => {
            children[item].classList.remove('hide');
        });
    }
}

function hideDelay(element, time) {
    setTimeout(() => {
        getId(element).classList.add('hide');
    }, time);
}

function hideChildren(childrenArray, childIndex) {
    let children = getId(childrenArray).children;

    if (childIndex == ALL) {
        for (let i = 0; i < children.length; i++) {
            children[i].classList.add('hide');
        }
    } else {
        childIndex.forEach(item => {
            children[item].classList.add('hide');
        });
    }
}

function open(element) {
    getId(element).classList.remove('close');
}

function close(element) {
    getId(element).classList.add('close');
}

function toggle(element, property) {
    getId(element).classList.toggle(property);
}

function closeParent(ref) {
    ref.parentNode.classList.add('close');
}

function getValue(element) {
    return getId(element).value;
}

function setValue(element, text) {
    getId(element).value = text;
}

function clearInput(element) {
    getId(element).value = "";
}

function clearElement(element) {
    getId(element).innerHTML = "";
}

function getText(element) {
    return getId(element).innerHTML;
}

function setText(element, text) {
    getId(element).innerHTML = text;
}

function setAttributes(element, attribute, value) {
    getId(element).setAttribute(attribute, value);
}

function getChildrens(element) {
    return getId(element).children;
}

function addClass(element, property) {
    getId(element).classList.add(property);
}

function removeClass(element, property) {
    getId(element).classList.remove(property);
}

function setFontSize(element, size) {
    getId(element).style.fontSize = size;
}

function handleFontSize(element) {
    let length = (getId(element).innerHTML).length;
    if (length <= 3) {
        setFontSize(element, "56px");
    } else if (length > 3 && length <= 6) {
        setFontSize(element, "38px");
    } else if (length > 6 && length <= 9) {
        setFontSize(element, "36px");
    } else if (length > 9 && length <= 12) {
        setFontSize(element, "34px");
    } else if (length > 12 && length <= 15) {
        setFontSize(element, "28px");
    }
}

function joinStopNames(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            string += array[i];
        } else {
            string += array[i] + ", ";
        }
    }

    return string;
}

// DD/MM/YYYY
function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');      // Day with leading zero
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
}

// HH:MM AM/PM
function formatTime12Hour() {
    const timestamp = Date.now();
    const date = new Date(timestamp); // or pass Date object directly
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
}

// ARRAYS TYPE FUNCTIONS
function getIdArray(elementArray) {
    let elements = []
    for (let i = 0; i < elementArray.length; i++) {
        elementArray.push(getId(elementArray[i]));
    }

    return elements;
}

function hideArray(elementArray) {
    for (let i = 0; i < elementArray.length; i++) {
        hide(elementArray[i]);
    }
}

function showArray(elementArray) {
    for (let i = 0; i < elementArray.length; i++) {
        show(elementArray[i]);
    }
}

function clearInputArray(inputsArray) {
    for (let i = 0; i < inputsArray.length; i++) {
        setValue(inputsArray[i], '');
    }
}

function getInputValuesArray(inputsArray) {
    let InputValues = [];
    for (let i = 0; i < inputsArray.length; i++) {
        InputValues.push(getValue(inputsArray[i]));
    }

    return InputValues;
}

function checkAllEmpty(inputsArray) {
    let isEmpty = false;
    for (let i = 0; i < inputsArray.length; i++) {
        if (getValue(inputsArray[i]) == "") {
            isEmpty = true;
            break;
        }
    }

    return isEmpty;
}

// Object Related Functions
// function array_Object(key, dataArray) {
//     key = cleanKey(key);
//     key = {
//         Depot: dataArray[0],
//         Bus_No: dataArray[1],
//         Type: dataArray[2],
//         Route_No: dataArray[3],
//         Occupancy: dataArray[4],
//         Route: dataArray[5],
//         Recent_Stop: dataArray[6],
//         Next_Stop: dataArray[7],
//         Status: dataArray[8],
//     }

//     return key;
// }

function array_Object(props, dataArray) {
    let obj = {};
    props.forEach((prop, i) => {
        obj[prop] = dataArray[i];
    });
    return obj;
}

function cleanKey(str) {
    return str.replace(/[^A-Za-z0-9]/g, "_");
}

// Build li elements from array and append them to container
// optional onclicklistener and value
function ListBuilder_Array(array, container, onclickListener = 1, value = 0) {
    array.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        if (onclickListener != 1) {
            li.setAttribute('onclick', onclickListener);
        }

        if (value != 0) {
            li.setAttribute('value', value);
        }

        getId(container).appendChild(li);
    });
}

function LC(text) {
    return text.toLowerCase();
}

// Special Sort and Filter Functions
function sortBusRoutes(routes) {
    return routes.sort((a, b) => {
        // Updated regex to capture:
        // 1. Main Number (Group 1)
        // 2. Main Letters (Group 2)
        // 3. The rest of the string including all slashes and sub-routes (Group 3)
        const regex = /^(\d+)([A-Z]*)?(.*)$/i; // Added 'i' for case-insensitivity in the match

        const parse = str => {
            const [, mainNum = '', mainLetters = '', subRoutes = ''] = str.match(regex) || [];

            // Split the subRoutes into segments (e.g., '/25S/229' becomes ['25S', '229'])
            // We use slice(1) to remove the initial empty string from the split if it starts with '/'
            const segments = subRoutes.split('/').slice(1);

            return {
                num: parseInt(mainNum, 10) || 0,
                letters: mainLetters,
                segments // Array of sub-route segments
            };
        };

        const parseSegment = segment => {
            // Parses a sub-route segment like '25S' or 'M'
            const segRegex = /^(\d*)([A-Z]*)$/i;
            const [, num = '', letters = ''] = segment.match(segRegex) || [];
            return {
                num: parseInt(num, 10) || 0,
                letters
            };
        };

        const A = parse(a);
        const B = parse(b);

        // --- 1. Compare main numbers first ---
        if (A.num !== B.num) return A.num - B.num;

        // --- 2. Then compare main letters ---
        if (A.letters !== B.letters) return A.letters.localeCompare(B.letters);

        // --- 3. Compare sub-routes segment by segment ---
        const maxSegments = Math.max(A.segments.length, B.segments.length);

        for (let i = 0; i < maxSegments; i++) {
            const segA = A.segments[i] || '';
            const segB = B.segments[i] || '';

            // If one route runs out of segments, it comes first (e.g., 10YF before 10YF/16S)
            if (segA.length === 0 && segB.length > 0) return -1;
            if (segA.length > 0 && segB.length === 0) return 1;
            if (segA.length === 0 && segB.length === 0) continue; // Should not happen here but good practice

            const parsedA = parseSegment(segA);
            const parsedB = parseSegment(segB);

            // Compare Segment Numbers (e.g., 1/25S vs 1/15S)
            if (parsedA.num !== parsedB.num) return parsedA.num - parsedB.num;

            // Compare Segment Letters (e.g., 1/25A vs 1/25B)
            const letterCompare = parsedA.letters.localeCompare(parsedB.letters);
            if (letterCompare !== 0) return letterCompare;
        }

        // --- 4. If all segments are equal, they are equal ---
        return 0;
    });
}

function removeReverseDuplicates(routes) {
    // A Set is used to store the canonical representation of each unique route found so far.
    const canonicalRoutes = new Set();

    // The final array to hold the unique route strings.
    const uniqueRoutes = [];

    for (const route of routes) {
        // 1. Check for a single forward slash ('/')
        const parts = route.split('/');

        let canonical;

        if (parts.length === 2) {
            // This is a single bi-directional route (e.g., "3K/281").
            const partA = parts[0];
            const partB = parts[1];

            // 2. Create the canonical form by sorting the two parts alphabetically.
            // This ensures "3K/281" and "281/3K" both resolve to the same canonical string.
            const sortedParts = [partA, partB].sort((a, b) => a.localeCompare(b));

            canonical = sortedParts.join('/');

        } else {
            // 3. Routes with no slash or multiple slashes (e.g., "10", "1/25S/229")
            // are considered unique and their canonical form is the route itself.
            canonical = route;
        }

        // 4. Check if the canonical form has already been processed.
        if (!canonicalRoutes.has(canonical)) {
            // This is a new unique route or the first instance of a bi-directional route.
            canonicalRoutes.add(canonical);
            uniqueRoutes.push(route);
        }
        // If it already exists in the Set, it is a reverse duplicate and is skipped.
    }

    return uniqueRoutes;
}