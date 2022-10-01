// Import parent class
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(employeeName, id, email);
        this.github = github;
    }
}

module.exports = Engineer;