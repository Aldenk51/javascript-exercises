const add = function(input1, input2) {
	return input1 + input2;
};

const subtract = function(input1, input2) {
	return input1 - input2;
};

const sum = function(input) {
  let total = 0;
	for(const i of input) {
    total += i;
  }
  return total
};

const multiply = function(input) {
  let total = 1;
  for (const i of input) {
    total *= i;
  }
  return total;
};

const power = function(input1, input2) {
	return input1 ** input2;
};

const factorial = function(input) {
  let total = 1;
  for (; input > 0; input --) {
    total *= input;
  }
  return total;
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
