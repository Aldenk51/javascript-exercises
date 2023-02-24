const palindromes = function (input) {
    input = input.replace(/[^A-Za-z]/g, "").toLowerCase();
    for(let i = 0; i < input.length/2; i ++) {
        if(input.charAt(i) != input.charAt(input.length-1 - i)) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
