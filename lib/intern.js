// Import parent class
const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super(employeeName, id, email);
        this.school = school;
    }

    getSchool();
    getRole();
}

module.exports = Intern;