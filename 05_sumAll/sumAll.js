const sumAll = function(input1, input2) {

    if(Number.isInteger(input1) && Number.isInteger(input2) && input1 > 0 && input2 > 0) {
        let sum = 0;
        for(let i = Math.min(input1, input2); i <= Math.max(input1, input2); i ++) {
            sum += i;
        }
        return sum;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
