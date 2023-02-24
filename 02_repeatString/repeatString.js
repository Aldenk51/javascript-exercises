const repeatString = function(input, number) {
    let output = "";
    if (number < 0) return "ERROR";
    for(;number > 0; number --) {
        output += input;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
