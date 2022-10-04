// Import parent class
const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;