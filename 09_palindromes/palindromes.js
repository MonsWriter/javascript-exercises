const palindromes = function (string) {
    const cleanedString = clean(string).toUpperCase();
    const reversedString = reverse(cleanedString);
    return (cleanedString === reversedString);
};

function reverse(string) {
    return string.split("").reverse().join("");
}

function clean(string) {
    return string.replace(/\W/g, "");
}

// Do not edit below this line
module.exports = palindromes;
