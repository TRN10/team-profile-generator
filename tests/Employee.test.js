
const Employee = require('../lib/Employee');

test("can initiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object')
});

describe('Employee', () => {
    it('Creates new employee', () => {
        const name = 'Alice';
        const id = 1234;
        const email = 'test@gmail.com';
        const employee = new Employee(name, id, email);

        expect(employee.name).toBe(name);
        expect(employee.id).toBe(id);
        expect(employee.email).toBe(email);
    });

    it('Checks name, id and email via class methods', () => {
        const testValue = 'Alice';
        const testValue1 = 1234;
        const testValue2 = 'test@gmail.com';

        const employee = new Employee(testValue, testValue1, testValue2);

        expect(employee.getName()).toBe(testValue);
        expect(employee.getId()).toBe(testValue1);
        expect(employee.getEmail()).toBe(testValue2);

    });

    it('getRole() should return \"Employee\"', () => {
        const testValue = 'Employee';
        const employee = new Employee('Alice', 1234, 'test@gmail.com');
        expect(employee.getRole()).toBe('Employee');
    });

});