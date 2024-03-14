type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

let user: ElevatedEmployee;

user = {
    name: 'Jéssica',
    privileges: ['Create server'],
    startDate: new Date()
};

//We can combine all types, for example:

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


    
