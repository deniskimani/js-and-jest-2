const numberToReversedDigits = number => {

    let num = number
    array = num.toString().split("").reverse().map(Number);

    return array
};

module.exports = numberToReversedDigits;