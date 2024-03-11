class Department {
    name: string;
    description: string;
    employees: string[];

    constructor (n: string, d: string){
        this.name = n;
        this.description = d;
        this.employees = []
    }

    describe(){
        console.log('Department ' + this.name + ' - ' + this.description);
    }

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
}
const hr = new Department('IT', 'Information Technology');

hr.describe();
hr.addEmployee('Jéssica');
hr.addEmployee('Matheus');
hr.addEmployee('P2');
hr.countEmployee();
hr.listOfEmployees();