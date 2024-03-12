class Department {
    // private name: string;
    // private description: string;
     protected employees: string[] = [];

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
}




const it = new ITDepartment(1,'IT', 'Information Technology', 'Developers');

//it.describe();
it.addEmployee('Jéssica');
it.addEmployee('Matheus');
it.addEmployee('P2');
it.addEmployee('Carol');

//it.countEmployee();
//it.listOfEmployees();

console.log(it);