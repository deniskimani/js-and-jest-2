const joinNames = namesObj => {

    names = Array()
    for (i in namesObj) {
        eachName = namesObj[i].name
        names.push(eachName)
    }
    lastName = names.pop();
    // return names.length ? names.join(', ') + ' & ' + lastName : lastName;
    if (names) {
        return `${names.join(', ')} & ${lastName}`
    } else {
        return lastName
    }

};

module.exports = joinNames;