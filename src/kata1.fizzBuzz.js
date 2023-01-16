const fizzBuzz = number => {


    let check = number % 3
    let checkTwo = number % 5

    if (check === 0 && checkTwo > 0) {
        // to check for multiples of 3 only
        return "Fizz"
    }

    if (checkTwo === 0 && check > 0) {
        // to check for multiples of 5 only
        return "Buzz"
    }

    if (check === 0 && checkTwo === 0) {
        // to check multiples of both 3 and 5
        return "FizzBuzz"
    }
    if (check > 0 && checkTwo > 0) {
        // if passed number is a multiple of neither
        return number
    }
};



module.exports = fizzBuzz;