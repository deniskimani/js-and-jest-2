const reachDestination = (distance, speed) => {

    let time = distance / speed

    return "Estimated time of arrival is " + time + " hours"

};

module.exports = reachDestination;