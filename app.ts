function add(n1: number, n2: number){
    return n1 + n2;
}

function addString (str: string){
    return str;
}

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
combinedValues = addString; /* It returns error because the function 
addString doesn't match the function defined for the variable 
combinedValue. It has only one parameter and it's a string. And the variable
expect 2 parameters and both should be numbers*/

console.log(combinedValues(9,8));