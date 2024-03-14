type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type UnknowEmployee = Admin | Employee;

const printEmployeeInformation = (emp: UnknowEmployee) => {
    console.log('Name: ' + emp.name);// works because both Admin and Employee types have property name
    if('privilegies' in emp){//type guard to validate if its Admin type
        console.log('Privileges: ' + emp.privilegies);
    }
    if('startDate' in emp){//or if it is Employee type
        console.log('Start Data: ' + emp.startDate);
    }
}

type ElevatedEmployee = Admin & Employee;
let user: ElevatedEmployee;

user = {
    name: 'Jéssica',
    privileges: ['Create server'],
    startDate: new Date()
};

printEmployeeInformation(user);

//We can combine all types, for example:

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const add = (a: Combinable, b: Combinable) => {
    if(typeof a === 'string' || typeof b === 'string'){ //typeof here is used as type guard and it can be used for types like object, string, number, boolean
        return a.toString() + b.toString();
    }
    return a + b;
}



class Car{
    drive(){
        console.log('I am driving...');
    }
}

class Truck{
    drive(){
        console.log('I am driving a truck...');
    }

    loadCargo(){
        console.log('I am loading cargo');
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle:Vehicle) => {
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo;
    }
}

useVehicle(v1);
useVehicle(v2);

    
