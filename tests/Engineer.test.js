const Employee = require('../lib/Employee');

const Engineer = require('../lib/Engineer');

test("getRole() to return 'Engineer'", () => {
    const testValue = 'Engineer';
    const employee = new Engineer('Alice', 1234, 'test@gmail.com', 1);
    expect(employee.getRole()).toBe(testValue);
});

test("Can set github profile using getGithub()", () => {
    const testValue = "gitHubUsername";
    const employee = new Engineer('Alice', 1234, 'test@gmail.com', testValue);
    expect(employee.getGithub()).toBe(testValue);
});