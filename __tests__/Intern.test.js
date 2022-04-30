const Intern = require('../lib/Intern');

const mockData = {
    name: 'Kid',
    id: null, 
    email: 'kid@school.com',
    school: 'BigSchool'
}

test('creates a new intern', () => {
    const intern = new Intern(mockData);

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('checks intern methods', () => {
    const intern = new Intern(mockData);

    expect(intern.getName()).toBe('Kid');
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toBe('kid@school.com');
    expect(intern.getSchool()).toBe('BigSchool');
    expect(intern.getRole()).toBe('Intern');
})