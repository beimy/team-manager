const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

const mockData = {
    name: 'Steve',
    id: null,
    email: 'steve@something.com'
}

test('creates a new employee', () => {
    const employee = new Employee(mockData);


    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('checks employee methods', () => {
    const employee = new Employee(mockData);

    expect(employee.getName()).toBe('Steve');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toBe('steve@something.com');
    expect(employee.getRole()).toBe('Employee');
})