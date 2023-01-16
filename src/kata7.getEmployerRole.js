const getEmployerRole = (employeeName, employees) => {

    for (i in employees) {
        if (employees[i].name === employeeName) {
            return employees[i].role
        }
    }
};

module.exports = getEmployerRole;