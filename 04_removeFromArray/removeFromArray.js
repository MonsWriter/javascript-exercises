const removeFromArray = function(inputArray, elementToRemove) {
    const indexOfElementToRemove = inputArray.indexOf(elementToRemove);
    inputArray.splice(indexOfElementToRemove, 1);
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
