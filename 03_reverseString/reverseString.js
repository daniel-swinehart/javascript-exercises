const reverseString = function(string) {
    let stringTrimmed = string.trim();
    const stringArray = stringTrimmed.split("");
    let stringReversed = '';
    for(let i = 0; i = stringArray.length; i++){
        stringReversed+= stringArray.pop();
    }
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
