const Manager = require('../lib/Manager')


const newManager = new Manager('Lian', 12, 'lian@gmail.com', 222)

test('test if this will create a new engineer profile', () => {
    expect(newManager.name).toBe('Lian')
    expect(newManager.id).toBe(12)
    expect(newManager.email).toBe('lian@gmail.com')
    expect(newManager.officeNumber).toBe(222)
    expect(newManager.getName()).toBe('Lian')
    expect(newManager.getId()).toBe(12)
    expect(newManager.getEmail()).toBe('lian@gmail.com')
    expect(newManager.getOfficeNumber()).toBe(222)
    expect(newManager.getRole()).toBe('Manager')
});