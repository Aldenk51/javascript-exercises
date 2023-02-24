const fibonacci = function(input) {
    let a = 0, b = 1, c, i;
    if (input < 0) return "OOPS";
    if (input == 0) return a;
    for(i = 2; i <= input; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
