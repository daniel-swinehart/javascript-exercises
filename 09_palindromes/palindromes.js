const palindromes = function (palinString) {
    palinString = palinString.toLowerCase();
    palinString = palinString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    palinString = palinString.replace(/\s/g, '');
    let originalArray = palinString.split("");
    let reversedArray = originalArray.reverse();
    let reversedString = reversedArray.toString();
    reversedString = reversedString.replace(/,/g,"");
    reversedString = reversedString.replace(/\s/g, '');
    if (palinString === reversedString){return true} else {return false}
};


// Do not edit below this line
module.exports = palindromes;
