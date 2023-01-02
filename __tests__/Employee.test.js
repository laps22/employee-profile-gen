const Employee = require('../lib/Employee')


const newEmployee = new Employee('a', 1, 'a@A.com')

test('test if this will create a new instance of employee', () => {
    expect(newEmployee.name).toBe('a')
    expect(newEmployee.id).toBe(1)
    expect(newEmployee.email).toBe('a@A.com')
    expect(newEmployee.getName()).toBe('a')
    expect(newEmployee.getId()).toBe(1)
    expect(newEmployee.getEmail()).toBe('a@A.com')
    expect(newEmployee.getRole()).toBe('Employee')
});