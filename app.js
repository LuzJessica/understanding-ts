"use strict";
let user;
user = {
    name: 'Jéssica',
    age: 31,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user.greet('Welcome');
