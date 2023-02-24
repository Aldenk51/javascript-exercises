const getTheTitles = function(input) {
    const titles = [];
    for(i of input) {
        titles.push(i.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
