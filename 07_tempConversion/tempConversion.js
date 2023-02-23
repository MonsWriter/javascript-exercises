const convertToCelsius = function(farenheitDegrees) {
  let celsiusDegrees = (farenheitDegrees - 32) * 5 / 9;
  return round(celsiusDegrees);
};

const convertToFahrenheit = function(celsiusDegrees) {
  let farenheitDegrees = (celsiusDegrees * 9 / 5) + 32;
  return round(farenheitDegrees);
};

function round(number) {
  return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
