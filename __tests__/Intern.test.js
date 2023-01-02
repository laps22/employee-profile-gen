const Intern = require('../lib/Intern')


const newIntern = new Intern('Intern', 1234, 'intern@gmail.com', 'UCF')

test('test if this will create a new Intern profile', () => {
    expect(newIntern.name).toBe('Intern')
    expect(newIntern.id).toBe(1234)
    expect(newIntern.email).toBe('intern@gmail.com')
    expect(newIntern.school).toBe('UCF')
    expect(newIntern.getName()).toBe('Intern')
    expect(newIntern.getId()).toBe(1234)
    expect(newIntern.getEmail()).toBe('intern@gmail.com')
    expect(newIntern.getSchool()).toBe('UCF')
    expect(newIntern.getRole()).toBe('Intern')
});