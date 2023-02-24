const leapYears = function(year) {
    if (year%4) {
        return false;
    }
    if (!(year%400)) {
        return true;
    }
    if(!(year%100)) {
        console.log(1);
        return false;
    }
    console.log(3);
    return true;
};

// Do not edit below this line
module.exports = leapYears;
