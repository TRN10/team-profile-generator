// Parent class

class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }
    getName()

    getId()

    getEmail()

    getRole() {
        return "employee";
    };
}

module.exports = Employee;
