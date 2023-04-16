export default class Schedule {
    constructor(name, shifts = [], employees = []) {
        this.name = name
        this.shifts = shifts
        this.employees = employees
    }
    addEmployee(employee) {
        employees.push(employee)
    }