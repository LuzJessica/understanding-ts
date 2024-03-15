"use strict";
const printEmployeeInformation = (emp) => {
    console.log('Name: ' + emp.name); // works because both Admin and Employee types have property name
    if ('privilegies' in emp) { //type guard to validate if its Admin type
        console.log('Privileges: ' + emp.privilegies);
    }
    if ('startDate' in emp) { //or if it is Employee type
        console.log('Start Data: ' + emp.startDate);
    }
};
let user;
user = {
    name: 'Jéssica',
    privileges: ['Create server'],
    startDate: new Date()
};
printEmployeeInformation(user);
const add = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') { //typeof here is used as type guard and it can be used for types like object, string, number, boolean
        return a.toString() + b.toString();
    }
    return a + b;
};
class Car {
    drive() {
        console.log('I am driving...');
    }
}
class Truck {
    drive() {
        console.log('I am driving a truck...');
    }
    loadCargo() {
        console.log('I am loading cargo');
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo;
    }
};
useVehicle(v1);
useVehicle(v2);
const moveAnimal = (animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
};
let a1;
a1 = {
    type: 'bird',
    flyingSpeed: 10
};
let a2;
a2 = {
    type: 'horse',
    runningSpeed: 30
};
moveAnimal(a1);
moveAnimal(a2);
