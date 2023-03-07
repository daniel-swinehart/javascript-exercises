const fibonacci = function(num) {
    if(num < 0){return "OOPS"}
    if(!Number.isInteger(num)){num = Number(num);}
    let lastSum = 0;
    let newSum = 1
    let holdValue;
    for(let i = 1; i < num; i++){
        holdValue = newSum;
        newSum = lastSum + newSum;
        lastSum = holdValue;
    }
    return newSum
};

// Do not edit below this line
module.exports = fibonacci;
