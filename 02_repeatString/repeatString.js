const repeatString = function(inputString, repeatsNumber) {
    let resultString = '';
    for (let i = 0; i < repeatsNumber; i++) {
        resultString += inputString;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
