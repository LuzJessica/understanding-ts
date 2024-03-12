abstract class Department {
    static fiscalYear = '2024';
    protected employees: string[] = [];

    constructor (protected readonly id: number, private name: string, private description: string){
        
    }

    abstract describe(this: Department):void;

    addEmployee(employee:string){
        this.employees.push(employee);
        console.log('Employee ' + employee + ' added successfully to the ' + this.name + ' department.');
    }

    countEmployee(){
        console.log('We have now ' + this.employees.length + ' employees in the ' + this.name + ' department.');
    }

    listOfEmployees(){
        console.log('Here are the names of our employees in the ' + this.name + ' department: '  + this.employees);
    }

    static createEmployee(name:string){
        return {name:name};
    }
}

class ITDepartment extends Department{
    private area: string;

    constructor(id:number, name:string, description:string, a: string){
        super(id, name, description);
        this.area = a;
    }

    addEmployee(name: string) {
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    describe(){
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department{
    private lastReport: string;
    constructor(id: number, private reports: string[]){
        super(id, 'Accounting', 'Reports of Account Department');
        this.lastReport = reports[0];
    }

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found!');
    }

    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please, inform a valid value');
        }
        this.addReport(value);
    }

    addReport(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }

    describe(){
        console.log('Accounting Department - ID: ' + this.id);
    }
}


const employee1 = Department.createEmployee('Rosângela') 
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment(1,'IT', 'Information Technology', 'Developers');

it.describe();
it.addEmployee('Jéssica');
it.addEmployee('Matheus');
it.addEmployee('P2');
it.addEmployee('Carol');

console.log(it);

const ac = new AccountingDepartment(2,[]);

ac.describe();
ac.addReport('Report of users');
ac.mostRecentReport = ('Report of devices');
console.log(ac.mostRecentReport);
console.log(ac);