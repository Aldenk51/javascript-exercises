const removeFromArray = function(input, ...theArgs) {
    console.log(input);
    for (i of theArgs) {
        if(input.indexOf(i) < 0) {console.log("not found");}
        else {
            if (typeof i === 'string') {
                input.splice(input.indexOf(i), 1);
                console.log("word");
            } else {
                input.splice(input.indexOf(i), 1);
                console.log("number");
            }
        }
        console.log(input);
    }
    return input;
};

// Do not edit below this line
module.exports = removeFromArray;
