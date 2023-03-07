const add = function(num1, num2) {
	return (num1 + num2)
};

const subtract = function(num1, num2) {
	return (num1 - num2)
};

const sum = function(array) {
  if(array.length < 1){return 0}
  let totalSum = 0;
  for(let i = 0; i < array.length; i++){
    totalSum += array[i];
  }
  return totalSum
};

const multiply = function(array) {
  if(array.length < 1){return 0}
  let totalProduct = 1;
  for(let i = 0; i < array.length; i++){
    totalProduct *= array[i];
  }
  return totalProduct
};

const power = function(base, power) {
	return Math.pow(base,power)
};

const factorial = function(num) {
	if(num < 1){return 1}
  let factResult = 1;
  for(let i = 1; i < num +1; i++){
    factResult *= i;
  }
  return factResult
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
