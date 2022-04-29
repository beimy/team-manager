const Engineer = require('../lib/Engineer');

test('creates new engineer', () => {
    const engineer = new Engineer('Engine', 'engineer@something.com', 'gitName', 20);

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
})

test('checks engineer methods', () => {
    const engineer = new Engineer('Engine', 'engineer@something.com', 'gitName', 20);

    expect(engineer.getName()).toBe('Engine');
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toBe('engineer@something.com');
    expect(engineer.getRole()).toBe('Engineer');

    expect(engineer.getGitHub()).toBe('gitName');
})