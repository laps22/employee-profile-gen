const Engineer = require('../lib/Engineer')


const newEngineer = new Engineer('John', 123, 'john@gmail.com', 'johnUser')

test('test if this will create a new engineer profile', () => {
    expect(newEngineer.name).toBe('John')
    expect(newEngineer.id).toBe(123)
    expect(newEngineer.email).toBe('john@gmail.com')
    expect(newEngineer.github).toBe('johnUser')
    expect(newEngineer.getName()).toBe('John')
    expect(newEngineer.getId()).toBe(123)
    expect(newEngineer.getEmail()).toBe('john@gmail.com')
    expect(newEngineer.getGithub()).toBe('johnUser')
    expect(newEngineer.getRole()).toBe('Engineer')
});