"use strict";
//NORMAL FUNCTION
function add(a, b) {
    let result;
    result = a + b;
    return result;
}
//ARROW FUNCTION
const add = (a, b) => {
    let result;
    result = a + b;
    return result;
};
// or  
const add = (a, b) => {
    let result;
    return a + b;
};
// or even 
const add = (a, b) => a + b;
// but this one just if we only have one opperation inside the funcition
