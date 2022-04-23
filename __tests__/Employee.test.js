const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates a new employee', () => {
    const employee = new Employee('Steve', 'steve@something.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})