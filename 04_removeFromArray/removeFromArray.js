const removeFromArray = function() {
    let args = Array.from(arguments);
    let inputArray = args.shift();
    const elementsToRemove = args;
    elementsToRemove.forEach((element) => {
        const indexOfElementToRemove = inputArray.indexOf(element);
        if (indexOfElementToRemove > -1) {
            inputArray.splice(indexOfElementToRemove, 1);
        }
    });
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
