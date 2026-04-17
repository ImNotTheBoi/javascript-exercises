const factorial = function(integer) {
    if (!Number.isInteger(integer) || integer < 0) {return}
    if (integer == 0) {return 1}
    else {
        return integer * factorial(integer - 1)
    }
};

// Do not edit below this line
module.exports = factorial;