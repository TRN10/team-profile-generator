const Employee = require('../lib/Employee');

const Intern = require('../lib/Intern');

test("getRole() to return 'Intern'", () => {
    const testValue = 'Intern';
    const employee = new Intern('Alice', 1234, 'test@gmail.com', 1);
    expect(employee.getRole()).toBe(testValue);
});

test("Can get interns school using getSchool()", () => {
    const testValue = "schoolName";
    const employee = new Intern('Alice', 1234, 'test@gmail.com', testValue);
    expect(employee.getSchool()).toBe(testValue);
});