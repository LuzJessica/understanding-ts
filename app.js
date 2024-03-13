"use strict";
class Person {
    constructor(n) {
        this.age = 32;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user;
user = new Person('Jéssica');
console.log(user);
user.greet('Welcome');
