const Employee = require('../lib/Employee');

const Manager = require('../lib/Manager');

test("getRole() to return 'Manager'", () => {
    const testValue = 'Manager';
    const employee = new Manager('Alice', 1234, 'test@gmail.com', 1);
    expect(employee.getRole()).toBe(testValue);
});

test("Can set office number using getOfficeNumber()", () => {
    const testValue = 1;
    const employee = new Manager('Alice', 1234, 'test@gmail.com', testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});