const humanCatDogYears = number => {

    function ageInDogYears() {
        let earlyDogYears = 2
        earlyDogYears *= 10.5

        let latterDogYears = number - 2
        latterDogYears *= 4

        let ageInDogYears = earlyDogYears + latterDogYears
        return ageInDogYears
    }


    function ageinCatYears() {
        let earlyCatYears = 2
        earlyCatYears *= 12.5

        let latterCatYears = number - 2
        latterCatYears *= 4

        let ageinCatYears = earlyCatYears + latterCatYears
        return ageinCatYears
    }

    return `If age in human years is ${number} then in dog years age is ${ageInDogYears()} and in cat years age is ${ageinCatYears()}.`




};

module.exports = humanCatDogYears;