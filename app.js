"use strict";
class Department {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
        console.log('Employee ' + employee + ' added successfully to the ' + this.name + ' department.');
    }
    countEmployee() {
        console.log('We have now ' + this.employees.length + ' employees in the ' + this.name + ' department.');
    }
    listOfEmployees() {
        console.log('Here are the names of our employees in the ' + this.name + ' department: ' + this.employees);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
Department.fiscalYear = '2024';
class ITDepartment extends Department {
    constructor(id, name, description, a) {
        super(id, name, description);
        this.area = a;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting', 'Reports of Account Department');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found!');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please, inform a valid value');
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
}
const employee1 = Department.createEmployee('Rosângela');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment(1, 'IT', 'Information Technology', 'Developers');
it.describe();
it.addEmployee('Jéssica');
it.addEmployee('Matheus');
it.addEmployee('P2');
it.addEmployee('Carol');
console.log(it);
const ac = new AccountingDepartment(2, []);
ac.describe();
ac.addReport('Report of users');
ac.mostRecentReport = ('Report of devices');
console.log(ac.mostRecentReport);
console.log(ac);
