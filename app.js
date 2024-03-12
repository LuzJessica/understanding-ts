"use strict";
class Department {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
        // private name: string;
        // private description: string;
        this.employees = [];
    }
    describe() {
        console.log('Department ' + this.id + ' - ' + this.name + ' - ' + this.description);
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
}
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
}
const it = new ITDepartment(1, 'IT', 'Information Technology', 'Developers');
//it.describe();
it.addEmployee('Jéssica');
it.addEmployee('Matheus');
it.addEmployee('P2');
it.addEmployee('Carol');
//it.countEmployee();
//it.listOfEmployees();
console.log(it);
const ac = new AccountingDepartment(1, []);
ac.addReport('Report of users');
ac.mostRecentReport = ('Report of devices');
console.log(ac.mostRecentReport);
console.log(ac);
