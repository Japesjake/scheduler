export default class Schedule {
    constructor(name, start = 'monday', shifts = [], employees = []) {
        this.name = name
        this.start = start
        this.shifts = shifts
        this.employees = employees
    }
    addEmployee(employee) {
        employees.push(employee)
    }
}