// Import parent class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        super(employeeName, id, email);
        this.school = school;
    }
}

module.exports = Intern;