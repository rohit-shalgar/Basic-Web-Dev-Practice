function flatten(input) {
    if (typeof input !== "object" || input === null) {
        return input;
    }
    if (Array.isArray(input)) {
        return flattenArray(input);
    } else {
        return flattenObject(input);
    }
}

function flattenArray(input, currentArray = []) {
    for (var i = 0; i < input.length; i++) {
        const current = input[i];
        if (Array.isArray(current)) {
            flattenArray(current, currentArray);
        } else {
            currentArray.push(current);
        }
    }
    return currentArray;
    //input.reduce((acc,curr) => acc.concat(flatten(curr)),[]);
}

function flattenObject(input, currentObject = {}) {
    for (const [key, value] of Object.entries(input)) {
        const valueIsObject = typeof value === 'object' && value !== null && !Array.isArray(value);
        const flattenedValue = flatten(value);
        if (valueIsObject) {
            Object.assign(currentObject, flattenedValue);
        } else {
            currentObject[key] = flattenedValue;
        }
    }
    return currentObject;
}
