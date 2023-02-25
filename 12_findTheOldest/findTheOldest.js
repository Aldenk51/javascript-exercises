const findTheOldest = function(input) {
    let oldestPos, oldestAge = 0, temp = 0;
    for(i of input) {
        if(!i.hasOwnProperty('yearOfDeath') && ((2023-i.yearOfBirth) > oldestAge)) {
            oldestPos = temp;
            oldestAge = 2023-i.yearOfBirth;
        } else if ((i.yearOfDeath-i.yearOfBirth) > oldestAge) {
            oldestPos = temp;
            oldestAge = i.yearOfDeath-i.yearOfBirth;
        }
        temp ++;
    }
    return input[oldestPos];
};

// Do not edit below this line
module.exports = findTheOldest;
