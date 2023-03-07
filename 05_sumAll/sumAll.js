const sumAll = function(begNum, endNum) {
    let finalSum = 0;
    if((begNum < 0) || (endNum < 0)){
        return "ERROR"
    } else if((!Number.isInteger(begNum)) || (!Number.isInteger(endNum))){
        return "ERROR"
    } else {
        if(begNum < endNum){
            for(let i = begNum; i < (endNum + 1); i++){
                finalSum += i;
            }
        } else {
            for(let i = endNum; i < (begNum + 1); i++){
                finalSum += i;
            }
        }
        return finalSum
    }
};

// Do not edit below this line
module.exports = sumAll;
