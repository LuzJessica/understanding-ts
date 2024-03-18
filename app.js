"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Jéssica', hobbies: ['Sports'] }, { age: 32 });
console.log(mergeObj);
