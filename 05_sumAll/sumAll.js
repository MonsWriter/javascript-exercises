const sumAll = function(firstNumber, secondNumber) {
    let result = 0; 
    if (typeof(firstNumber) != 'number' || 
        typeof(secondNumber) != 'number' || 
        (firstNumber < 0) || 
        (secondNumber < 0) ) 
    {
        result = 'ERROR';
    } else {
        let smallerNumber = (firstNumber > secondNumber) ? secondNumber : firstNumber
        let largerNumber = (firstNumber > secondNumber) ? firstNumber : secondNumber
        for (let number = smallerNumber; number < largerNumber + 1; number++) {
            result += number;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
