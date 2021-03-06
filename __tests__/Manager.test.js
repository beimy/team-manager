const Manager = require('../lib/Manager');

const mockData = {
    name : 'Manager',
    email: 'manager@somewhere.com',
    officeNumber: null, 
    id: null
}

test('creates a new manager', () => {
    const manager = new Manager(mockData);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('checks manager methods', () => {
    const manager = new Manager(mockData);

    expect(manager.getName()).toBe('Manager');
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toBe('manager@somewhere.com');
    expect(manager.getRole()).toBe('Manager');
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})

