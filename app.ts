//NORMAL FUNCTION

function add(a: number, b: number){
    let result;
    result = a+b;
    return result;
}

//ARROW FUNCTION

const add = (a:number , b:number) => {
    let result;
    result = a+b;
    return result;
}

// or  
const add = (a: number, b:number) => {
    let result;
    return a+b;
}

// or even 
const add = (a: number, b:number) => a+b;

// but this one just if we only have one opperation inside the funcition