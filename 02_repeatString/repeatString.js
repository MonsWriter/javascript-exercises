const repeatString = function(inputString, repeatsNumber) {
    let resultString = '';
    if (repeatsNumber >= 0) {
        for (let i = 0; i < repeatsNumber; i++) {
            resultString += inputString;
        }
    } else {
        resultString = 'ERROR';
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
