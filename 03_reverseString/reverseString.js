const reverseString = function(inputString) {
    let arrayOfChars = Array.from(inputString);
    let reversedArrayOfChars = arrayOfChars.reverse();
    return reversedArrayOfChars.join('');
};

// Do not edit below this line
module.exports = reverseString;
