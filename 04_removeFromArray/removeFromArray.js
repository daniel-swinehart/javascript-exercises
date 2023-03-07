const removeFromArray = function(myArray, ...otherArgs) {
    let valuePosition;
    for(const arg of otherArgs){
        valuePosition = myArray.lastIndexOf(arg);
        if (valuePosition != -1){
            myArray.splice(valuePosition, 1);
        }
    }
    return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
