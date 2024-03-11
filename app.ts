class Department {
    // private name: string;
    // private description: string;
     private employees: string[] = [];

    constructor (private readonly id: number, private name: string, private description: string){
        
    }

    describe(){
        console.log('Department '+ this.id + ' - ' + this.name + ' - ' + this.description);
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
const hr = new Department(1,'IT', 'Information Technology');

hr.describe();
hr.addEmployee('Jéssica');
hr.addEmployee('Matheus');
hr.addEmployee('P2');
hr.countEmployee();
hr.listOfEmployees();