// Import parent class
const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(employeeName, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;