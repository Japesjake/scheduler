import { Schedule } from './Schedule'
import Employee from './Employee'

describe('Schedule', () => {
    it('Checks if employee is added', () => {
        const schedule = new Schedule('test')
        const employee = new Employee('John', "Doe")
        schedule.addEmployee(employee)
        expect(schedule.employees).toBe([employee])
    })
})