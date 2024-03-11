"use strict";
const userName = 'Jéssica';
let age = 30;
age = 29;
function add(a, b) {
    let result;
    result = a + b;
    return result;
}
if (age > 20) {
    let isOld = true;
}
console.log(isOld); /* we are getting error because let variables can
accessed only inside where they were created, in this case inside
the if statement */
