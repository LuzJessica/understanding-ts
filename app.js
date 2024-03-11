"use strict";
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
/*The spread opereator makes possible to add values from an array
to another array. The values, not add an array inside another one.
The same is possible for objects */
const person = {
    name: 'Jéssica',
    age: 30
};
const copiedPerson = Object.assign({}, person);
