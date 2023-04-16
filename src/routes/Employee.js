export default class Employee {
    constructor(firstName, lastName, availability = {}) {
        this.firstName = firstName
        this.lastName = lastName
        this.availability = availability
    }
}